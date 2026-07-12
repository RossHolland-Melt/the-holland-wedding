"use client";

import { useEffect, useMemo, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, Tooltip, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { bandLabel, stayDistance, distanceLabel, venue, type Stay } from "@/lib/data";

type Props = {
  stays: Stay[]; // already filtered + sorted (closest first)
  activeId: string | null;
  onSelect: (id: string) => void;
  expanded?: boolean; // full-screen toggle - triggers a Leaflet resize
};

const VENUE_ICON = L.divIcon({
  className: "venue-marker",
  html: `<span class="venue-marker__pin">
      <svg viewBox="0 0 24 32" aria-hidden="true">
        <path d="M12 0C5.4 0 0 5.2 0 11.6 0 20 12 32 12 32s12-12 12-20.4C24 5.2 18.6 0 12 0Z"/>
        <path class="venue-marker__heart" d="M12 17.5s-4.2-2.8-4.2-5.6a2.4 2.4 0 0 1 4.2-1.6 2.4 2.4 0 0 1 4.2 1.6c0 2.8-4.2 5.6-4.2 5.6Z"/>
      </svg>
    </span>`,
  iconSize: [30, 40],
  iconAnchor: [15, 40],
  popupAnchor: [0, -38],
});

function stayIcon(n: number, active: boolean) {
  return L.divIcon({
    className: `stay-marker${active ? " stay-marker--active" : ""}`,
    html: `<span class="stay-marker__dot">${n}</span>`,
    iconSize: active ? [34, 34] : [28, 28],
    iconAnchor: active ? [17, 17] : [14, 14],
    popupAnchor: [0, active ? -18 : -15],
  });
}

function fitToStays(map: L.Map, stays: Stay[]) {
  if (stays.length === 0) {
    map.setView([venue.lat, venue.lng], 13);
    return;
  }
  const pts: L.LatLngExpression[] = [
    [venue.lat, venue.lng],
    ...stays.map((s) => [s.lat, s.lng] as L.LatLngExpression),
  ];
  map.fitBounds(L.latLngBounds(pts), { padding: [48, 48], maxZoom: 14 });
}

function MapController({
  stays,
  activeId,
  expanded,
  markersRef,
}: {
  stays: Stay[];
  activeId: string | null;
  expanded?: boolean;
  markersRef: React.MutableRefObject<Record<string, L.Marker>>;
}) {
  const map = useMap();

  // Frame the venue plus every visible stay whenever the filtered set changes.
  useEffect(() => {
    fitToStays(map, stays);
  }, [stays, map]);

  // When the container changes size (expand / collapse), tell Leaflet and refit.
  useEffect(() => {
    const t = setTimeout(() => {
      map.invalidateSize();
      fitToStays(map, stays);
    }, 260);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expanded, map]);

  // Fly to and open the active stay's popup when selection changes.
  useEffect(() => {
    if (!activeId) return;
    const s = stays.find((x) => x.id === activeId);
    if (!s) return;
    map.flyTo([s.lat, s.lng], Math.max(map.getZoom(), 13), { duration: 0.6 });
    const marker = markersRef.current[activeId];
    if (marker) {
      const t = setTimeout(() => marker.openPopup(), 280);
      return () => clearTimeout(t);
    }
  }, [activeId, stays, map, markersRef]);

  return null;
}

export default function AccommodationMap({ stays, activeId, onSelect, expanded }: Props) {
  const markersRef = useRef<Record<string, L.Marker>>({});

  // Stable initial view; MapController refines bounds after mount.
  const center = useMemo<L.LatLngExpression>(() => [venue.lat, venue.lng], []);

  return (
    <MapContainer
      center={center}
      zoom={13}
      scrollWheelZoom={false}
      className="leaflet-root"
      attributionControl
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        subdomains="abcd"
        maxZoom={19}
      />

      <Marker position={[venue.lat, venue.lng]} icon={VENUE_ICON} zIndexOffset={1000}>
        <Tooltip permanent direction="bottom" offset={[0, 2]} className="venue-tip">
          {venue.name}
        </Tooltip>
        <Popup className="stay-popup">
          <div className="stay-popup__type">The Wedding</div>
          <div className="stay-popup__name">{venue.name}</div>
          <div className="stay-popup__meta">{venue.address}</div>
        </Popup>
      </Marker>

      {stays.map((s, i) => {
        const km = stayDistance(s);
        return (
          <Marker
            key={s.id}
            position={[s.lat, s.lng]}
            icon={stayIcon(i + 1, s.id === activeId)}
            zIndexOffset={s.id === activeId ? 500 : 0}
            ref={(m) => {
              if (m) markersRef.current[s.id] = m;
              else delete markersRef.current[s.id];
            }}
            eventHandlers={{ click: () => onSelect(s.id) }}
          >
            <Popup className="stay-popup">
              <div className="stay-popup__type">{s.type}</div>
              <div className="stay-popup__name">{s.name}</div>
              <div className="stay-popup__meta">
                {distanceLabel(km)} · {s.area} · {bandLabel(s.band)}
              </div>
              <div className="stay-popup__price">{s.price}</div>
              <a
                className="stay-popup__link"
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                View &amp; book →
              </a>
            </Popup>
          </Marker>
        );
      })}

      <MapController
        stays={stays}
        activeId={activeId}
        expanded={expanded}
        markersRef={markersRef}
      />
    </MapContainer>
  );
}
