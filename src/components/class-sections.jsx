"use client";

import { AnimatePresence, motion } from "framer-motion";
import moment from "moment";
import { useState } from "react";
import { Link } from "react-router-dom";

export const classData = {
  nyc: [
    {
      id: 2,
      date: "January 22, 2024",
      time: "19:00 - 20:30",
      basePrice: 3000,
      eventName: "NYC Yoga Flow",
      eventDescription:
        "A dynamic class combining movement and mindfulness, perfect for intermediate-level yoga enthusiasts.",
      venue: "Yoga Studio NYC, 123 Main Street, New York, NY",
    },
    {
      id: 3,
      date: "January 29, 2024",
      time: "19:00 - 20:30",
      basePrice: 3000,
      eventName: "NYC Power Yoga",
      eventDescription:
        "An energizing class that builds strength and flexibility through challenging poses and sequences.",
      venue: "Yoga Studio NYC, 123 Main Street, New York, NY",
    },
  ],
  private: [
    {
      id: 4,
      date: "January 16, 2024",
      time: "By appointment",
      basePrice: 5000,
      eventName: "Private Yoga Session",
      eventDescription:
        "A personalized yoga session tailored to your individual needs and goals, available by appointment.",
      venue: "Client's Preferred Location",
    },
    {
      id: 5,
      date: "January 23, 2024",
      time: "By appointment",
      basePrice: 5000,
      eventName: "Private Yoga Session",
      eventDescription:
        "A personalized yoga session tailored to your individual needs and goals, available by appointment.",
      venue: "Client's Preferred Location",
    },
    {
      id: 6,
      date: "January 30, 2024",
      time: "By appointment",
      basePrice: 5000,
      eventName: "Private Yoga Session",
      eventDescription:
        "A personalized yoga session tailored to your individual needs and goals, available by appointment.",
      venue: "Client's Preferred Location",
    },
  ],
  online: [
    {
      id: 7,
      date: "January 17, 2024",
      time: "20:00 - 21:30",
      basePrice: 2000,
      eventName: "Online Yoga for Beginners",
      eventDescription:
        "A virtual class introducing yoga basics, perfect for those new to yoga or looking to refresh their practice.",
      venue: "Zoom (Link provided upon registration)",
    },
    {
      id: 8,
      date: "January 24, 2024",
      time: "20:00 - 21:30",
      basePrice: 2000,
      eventName: "Online Intermediate Yoga",
      eventDescription:
        "An engaging online session that focuses on building strength and flexibility through intermediate yoga poses.",
      venue: "Zoom (Link provided upon registration)",
    },
    {
      id: 9,
      date: "January 31, 2024",
      time: "20:00 - 21:30",
      basePrice: 2000,
      eventName: "Online Yoga Flow",
      eventDescription:
        "A virtual class offering a seamless flow of yoga sequences, ideal for relaxation and mindfulness.",
      venue: "Zoom (Link provided upon registration)",
    },
  ],
};

export function ClassSections() {
  const [activeSection, setActiveSection] = useState("nyc");

  return (
    <section className="py-20" id="class">
      <div className="container mx-auto px-4">
        <div className="flex flex-row md:flex-col items-start md:items-center gap-12">
          {/* Navigation Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-[800px]">
            {[
              { id: "nyc", label: "NYC/NJ Group" },
              { id: "private", label: "Private" },
              { id: "online", label: "Online" },
            ].map((section) => (
              <button
                key={section.id}
                className={`text-[15px] md:text-lg py-6 border-r-2 md:border-r-0  md:border-b-2 ${
                  activeSection === section.id
                    ? "text-[#64ffda] border-[#64ffda]"
                    : "text-[#64ffda]/60 border-transparent hover:text-[#64ffda]"
                }`}
                onClick={() => setActiveSection(section.id)}
              >
                {section.label}
              </button>
            ))}
          </div>

          {/* Class Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="w-full max-w-3xl"
            >
              <div className="gap-4 flex flex-wrap justify-center">
                {classData[activeSection].map((classItem, index) => (
                  <Link
                    key={classItem.id}
                    to={`/class/${activeSection}-${classItem.id}`}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-[#64ffda]/5 rounded-lg p-6 hover:bg-[#64ffda]/10 transition-colors"
                    >
                      <button className="text-lg text-[#64ffda]">
                        {moment(classItem.date).format("DD/MMM").toUpperCase()}
                      </button>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

