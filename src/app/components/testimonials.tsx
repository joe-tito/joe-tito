import { config, Testimonial } from "../config";

export default function Testimonials() {
  function shuffle(array: Testimonial[]) {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      const randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
  }

  const testimonials = config.testimonials;
  shuffle(testimonials);

  return (
    <div
      data-hs-carousel='{
    "loadingClasses": "opacity-0",
    "dotsItemClasses": "hs-carousel-active:bg-fuchsia-700 hs-carousel-active:border-fuchsia-700 size-3 border border-gray-400 rounded-full cursor-pointer dark:hs-carousel-active:bg-fuchsia-500 dark:hs-carousel-active:border-fuchsia-500",
    "isAutoPlay": true,
    "speed": 8000
  }'
      className="relative"
    >
      <div className="hs-carousel relative overflow-hidden w-full h-36 rounded-xl">
        <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
          {testimonials.map(({ quote, name, company }, index) => (
            <div key={index} className="hs-carousel-slide">
              <div className="justify-center h-full p-6 bg-gradient-to-tr hover:bg-gradient-to-bl from-neutral-100 to-neutral-50 dark:from-neutral-950 dark:to-neutral-900">
                <div className="self-center text-neutral-700 dark:text-neutral-200 transition duration-700 italic font-semibold mb-2 leading-tight">
                  &quot;{quote}&quot;
                </div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400 font-light">
                  {name} ({company})
                </div>
              </div>
            </div>
          ))}
          {/* <div className="hs-carousel-slide">
            <div className="flex justify-center h-full bg-gray-100 p-6 dark:bg-neutral-900">
              <span className="self-center text-gray-800 transition duration-700 dark:text-white">
                Joe was a pleasure to work with, and helped me on several
                projects. Some were on a tight deadline, and Joe always
                delivered quality work. I'd use him again in a heartbeat!!
              </span>
            </div>
          </div>
          <div className="hs-carousel-slide">
            <div className="flex justify-center h-full bg-gray-200 p-6 dark:bg-neutral-800">
              <span className="self-center text-gray-800 transition duration-700 dark:text-white">
                Second slide
              </span>
            </div>
          </div>
          <div className="hs-carousel-slide">
            <div className="flex justify-center h-full bg-gray-300 p-6 dark:bg-neutral-700">
              <span className="self-center text-gray-800 transition duration-700 dark:text-white">
                Third slide
              </span>
            </div>
          </div> */}
        </div>
      </div>

      <div className="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2"></div>
    </div>
  );
}
