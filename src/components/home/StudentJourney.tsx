// const studentJourney = {
//   title: "Enter The Student Journey",
//   description:
//     "Air Force School, ASTE is located within Bangalore city limits. The school is one of the forerunners amongst the elite educational institutions in the city. It functions under the aegis of IAF educational and cultural society and is meant primarily for the children of Air Force personnel, Air Force School ASTE is recognised school up to XIIth class and affiliated with CBSE New Delhi. Air Force School, ASTE was started as a Nursery School in 1977 to cater to the educational needs of the children of Air Force personnel serving in HAL based units. Over the years, the school has grown in size up to XII std. Air Force School, ASTE functions from its two locations at Murgeshpalya Camp and Akash Vihar Camp and comprises of classes from Nursery to XII std.",
//   images: ["/journey1.png", "/journey2.png", "/journey3.png"],
// }

// export default function StudentJourney() {
//   return (
//     <section className="container mx-auto px-4 py-16 2xl:px-20 md:py-24">
//       <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24">
//         {/* Images Grid */}
//         <div className="relative flex-1">
//           <div className="grid grid-cols-12 gap-4">
//             {/* Top row */}
//             <figure className="col-span-7">
//               <img
//                 src={studentJourney.images[0] || "/placeholder.svg"}
//                 alt="School assembly"
//                 className="rounded-2xl w-full object-cover"
//               />
//             </figure>
//             <figure className="col-span-5 flex flex-col h-full justify-end items-center">
//               <img src="/circleboxblue.png" alt="" className="w-12"/>
//               <img
//                 src={studentJourney.images[1] || "/placeholder.svg"}
//                 alt="Students studying"
//                 className="rounded-2xl w-full"
//               />

//             </figure>

//             {/* Decorative wave */}
//             <figure className="col-span-12 lg:col-span-10 flex relative mx-auto">
//               <img src="/lines.png" alt="" className="object-contain hidden md:block"/>
//               <img
//                 src={studentJourney.images[2] || "/placeholder.svg"}
//                 alt="Cultural performance"
//                 className="rounded-2xl"
//               />
//             </figure>

//           </div>
//         </div>

//         {/* Content */}
//         <div className="flex-1 space-y-6 text-center lg:text-start">
//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">{studentJourney.title}</h2>
//           <p className="text-gray-600 text-sm md:text-lg md:leading-relaxed">{studentJourney.description}</p>
//         </div>
//       </div>
//     </section>
//   )
// }
