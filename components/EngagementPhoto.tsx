import Image from "next/image";

export default function EngagementPhoto() {
  return (
    <section className="photo">
      <div className="photo__wrap">
        <div className="photo__frame">
          <Image
            src="/engagement-toast.jpg"
            alt="Ross and Chloe raising a toast beside the dam after their engagement"
            fill
            sizes="(max-width: 768px) 90vw, 780px"
            className="photo__img"
          />
        </div>
        <div className="photo__caption">where it all began</div>
      </div>
    </section>
  );
}
