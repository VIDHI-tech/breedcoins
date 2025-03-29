import { Mail, PhoneCall } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const contactConfig = {
  phoneNumber: "+91 8089283820",
  email: "info@A5STEI.com",
};

export default function Contact() {
  return (
    <section
      id="contact"
      className="container mx-auto px-10 py-12 2xl:px-20 2xl:pb-32 space-y-8"
    >
      {/* Heading */}
      <div className="space-y-4">
        <h2 className="text-5xl font-bold text-primary">Get in Touch</h2>
        <p>
          You can always reach us via the following contact details. We will
          give our best to reach you as soon as possible.
        </p>
      </div>

      {/* Contact Info */}
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
        <div className="flex items-center gap-4">
          <PhoneCall />
          <div className="space-y-1">
            <p className="text-sm font-medium">PHONE</p>
            <a
              href={`tel:${contactConfig.phoneNumber}`}
              className="text-[#0568EC] font-medium"
            >
              {contactConfig.phoneNumber}
            </a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Mail />
          <div className="space-y-1">
            <p className="text-sm font-medium">EMAIL</p>
            <a
              href={`mailto:${contactConfig.email}`}
              className="text-[#0568EC] font-medium"
            >
              {contactConfig.email}
            </a>
          </div>
        </div>
      </div>

      {/* Camp Locations */}
      <div className="grid md:grid-cols-2 gap-8 2xl:gap-14">
        <Card>
          <CardHeader>
            <CardTitle>GV CAMP</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.2423246110693!2d77.6499680758871!3d12.956339815211052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae12332ebc52f3%3A0xb0a2ff828cd62d6b!2sAir%20Force%20School%2C%20ASTE%2C%20Murugeshpalaya%20GV%20CAMP!5e0!3m2!1sen!2sin!4v1740244590611!5m2!1sen!2sin"
              className="w-full h-48 rounded-md shadow-lg"
              loading="lazy"
            ></iframe>
            <div className="space-y-2">
              <p className="text-[#1B1E2B] text-xl font-medium">
                NAL WIND TUNNEL ROAD, Bengaluru-560 017
              </p>
              <div className="space-y-1">
                <a
                  href="mailto:afasate@yahoo.co.in"
                  className="text-[#0568EC] block"
                >
                  afasate@yahoo.co.in
                </a>
                <p className="text-[#1B1E2B]">080-25272332 / 25276920</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>AV CAMP</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1944.1314257249273!2d77.6971780388083!3d12.955025010778437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae130046157c23%3A0xe86d28ee1fd66968!2sAir%20Force%20School%20Akash%20Vihar%20Camp!5e0!3m2!1sen!2sin!4v1740245146936!5m2!1sen!2sin"
              className="w-full h-48 rounded-md shadow-lg"
              loading="lazy"
            ></iframe>
            <div className="space-y-2">
              <p className="text-[#1B1E2B] text-xl font-medium">
                AKASH VIHAR CAMP, OPP BRAND FACTORY, MARTHAHALLI, BENGALURU -
                560 037
              </p>
              <div className="space-y-1">
                <a
                  href="mailto:airforceschool.avc@gmail.com"
                  className="text-[#0568EC] block"
                >
                  airforceschool.avc@gmail.com
                </a>
                <p className="text-[#1B1E2B]">080-25401812 / 25400010</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
