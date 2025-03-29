// import React, { useState } from 'react';
// // import Button from '../common/Button';

// interface FormConfig {
//   label: string;
//   name: string;
//   type: string;
//   placeholder: string;
// }

// const formConfig: FormConfig[] = [
//   {
//     label: 'Name',
//     name: 'name',
//     type: 'text',
//     placeholder: 'Enter Name'
//   },
//   {
//     label: 'Email',
//     name: 'email',
//     type: 'email',
//     placeholder: 'Enter your Email'
//   },
//   {
//     label: 'Phone',
//     name: 'phone',
//     type: 'tel',
//     placeholder: 'Enter Phone Number'
//   },
//   {
//     label: 'Standard',
//     name: 'standard',
//     type: 'text',
//     placeholder: 'Enter Standard'
//   },
//   {
//     label: 'State',
//     name: 'state',
//     type: 'text',
//     placeholder: 'Enter State'
//   },
//   {
//     label: 'City',
//     name: 'city',
//     type: 'text',
//     placeholder: 'Enter City'
//   }
// ];

// export default function EnquiryForm() {
//   const [formData, setFormData] = useState({});
//   const [agreed, setAgreed] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log(formData);
//   };

//   return (
//     <section className="relative bg-white py-16">
//       {/* Left Image */}
//       <div className="absolute left-0 top-0 h-full w-1/4">
//         <img
//           src="/enquiry1.png"
//           alt="Education Background"
//           className="h-full w-full object-cover"
//         />
//       </div>

//       {/* Right Image */}
//       <div className="absolute right-0 top-0 h-full w-1/4">
//         <img
//           src="/enquiry2.png"
//           alt="Education Background"
//           className="h-full w-full object-cover"
//         />
//       </div>

//       {/* Form */}
//       <div className="relative md:px-[calc(100%-90%)]">
//           <h2 className="text-5xl font-semibold pb-10 text-center">Enquiry Form</h2>
//           <p className="md:text-2xl text-gray-500 pb-16 text-center">
//             Complete the Form for more information, and our team will contact you soon
//           </p>

//         <form onSubmit={handleSubmit} className="p-8">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//             {formConfig.map((field) => (
//               <div key={field.name} className="flex flex-col">
//                 <label htmlFor={field.name} className="text-xl font-medium pb-5">
//                   {field.label}
//                 </label>
//                 <input
//                   type={field.type}
//                   required
//                   id={field.name}
//                   name={field.name}
//                   placeholder={field.placeholder}
//                   onChange={handleChange}
//                   className="h-12 xl:h-16 pl-5 rounded-md border-gray-300 bg-slate-100 shadow-sm focus:border-none focus:ring-transparent"
//                 />
//               </div>
//             ))}
//           </div>

//           <div className="pt-16 flex flex-col md:flex-row gap-y-5 items-center justify-between">
//             <div className="flex items-center">
//               <input
//                 id="terms"
//                 type="checkbox"
//                 checked={agreed}
//                 onChange={(e) => setAgreed(e.target.checked)}
//                 className="h-6 w-6 rounded bg-gray-300 text-blue-600 focus:ring-blue-500"
//               />
//               <label htmlFor="terms" className="pl-2 block xl:text-xl text-gray-500">
//                 I agree with{' '}
//                 <a href="#" className="text-blue-200 hover:text-blue-400">
//                   Terms of Use
//                 </a>{' '}
//                 and{' '}
//                 <a href="#" className="text-blue-200 hover:text-blue-400">
//                   Privacy Policy
//                 </a>
//               </label>
//             </div>
//             <button
//               type="submit"
//               disabled={!agreed}
//               className="flex items-center gap-2 px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#167AC6] focus:outline-none disabled:opacity-80 disabled:cursor-not-allowed"
//             >
//               Send Your Message
//               <img src="/flight.svg" alt="" />
//             </button>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// }
