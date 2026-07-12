// Serves an "Add to Calendar" file for the wedding. Returning a proper
// text/calendar response means iOS opens Apple Calendar, Windows opens Outlook,
// and desktop browsers download an .ics that imports into any calendar app.
//
// Times are in UTC (Z). The wedding is 15:00 SAST (UTC+2, no daylight saving),
// which is 13:00 UTC; the evening runs to midnight SAST (22:00 UTC).

function pad(n: number): string {
  return String(n).padStart(2, "0");
}

function toICSDate(d: Date): string {
  return (
    `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}` +
    `T${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}${pad(d.getUTCSeconds())}Z`
  );
}

export async function GET() {
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//The Holland Wedding//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    "UID:ross-and-chloe-wedding-2027-04-10@the-holland-wedding",
    `DTSTAMP:${toICSDate(new Date())}`,
    "DTSTART:20270410T123000Z",
    "DTEND:20270410T220000Z",
    "SUMMARY:Ross & Chloe's Wedding",
    // Commas and semicolons must be backslash-escaped in ICS text values.
    "LOCATION:Natte Valleij Estate\\, R44\\, Klapmuts\\, 7625\\, Western Cape\\, South Africa",
    "DESCRIPTION:We can't wait to celebrate with you! Arrival from 2:30 PM.\\n\\nDetails: https://the-holland-wedding.vercel.app",
    "STATUS:CONFIRMED",
    "END:VEVENT",
    "END:VCALENDAR",
  ];

  // ICS requires CRLF line endings.
  const body = lines.join("\r\n") + "\r\n";

  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition":
        'attachment; filename="ross-and-chloe-wedding.ics"',
      "Cache-Control": "public, max-age=3600",
    },
  });
}
