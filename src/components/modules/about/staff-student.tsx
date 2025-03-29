import { useEffect, useState } from "react";
import { StaffGvTeachingTable } from "../staffstudentTables/staff_gv_teaching";
import { StaffGvNonteachingTable } from "../staffstudentTables/staff_gv_nonteaching";
import { StaffAvTeachingTable } from "../staffstudentTables/staff_av_teaching";
import { StaffAvNonteachingTable } from "../staffstudentTables/staff_av_nonteaching";
import { StudentCouncilAvTable } from "../staffstudentTables/studentcouncil_av";
import { StudentCouncilGvTable } from "../staffstudentTables/studentcouncil_gv";
import { cn } from "@/lib/utils";
import { useLocation } from "react-router";

function Toggle({
  label,
  isActive,
  onToggle,
}: {
  label: string;
  isActive: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
        isActive ? "bg-primary text-white" : "text-gray-700 "
      }`}
    >
      {label}
    </button>
  );
}

function Sidebar({
  activeSection,
  setActiveSection,
}: {
  activeSection: "staff" | "student";
  setActiveSection: (section: "staff" | "student") => void;
}) {
  return (
    <div className="w-full lg:w-96 space-y-6 p-2">
      <button
        onClick={() => setActiveSection("staff")}
        className={cn(
          `w-fit flex items-center gap-2 px-5 py-1 rounded-full transition-colors text-xl font-bold`,
          {
            "bg-primary text-white": activeSection === "staff",
            "text-[#64748B] bg-[#F8FAFC] border-2 border-[#CBD5E1]":
              activeSection !== "staff",
          }
        )}
        id="staff"
      >
        <img
          src={activeSection === "staff" ? "./staffw.png" : "./staffg.png"}
          alt="staff"
          className="w-8"
        />
        Staff
      </button>
      <button
        onClick={() => setActiveSection("student")}
        className={cn(
          `w-fit flex items-center gap-2 px-5 py-1 rounded-full transition-colors text-xl font-bold`,
          {
            "bg-primary text-white": activeSection === "student",
            "text-[#64748B] bg-[#F8FAFC] border-2 border-[#CBD5E1]":
              activeSection !== "student",
          }
        )}
      >
        <img
          src={
            activeSection === "student" ? "./studentw.png" : "./studentg.png"
          }
          alt="student"
          className="w-8"
        />
        Student Council
      </button>
    </div>
  );
}

function StaffStudent() {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState<"staff" | "student">(
    "staff"
  );

  useEffect(() => {
    if (location.hash === "#student") {
      setActiveSection("student");
    } else if (location.hash === "#staff") {
      setActiveSection("staff");
    }
  }, [location]);

  const [activeGVCamp, setActiveGVCamp] = useState(true);
  const [activeAVCamp, setActiveAVCamp] = useState(false);

  return (
    <div className="bg-[#FEFEFE] flex flex-col lg:flex-row lg:px-20 py-20 w-full space-x-5 overflow-hidden">
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <div className="w-full lg:p-2">
        {/* Camp Toggles */}
        <div className="flex w-fit space-x-3 rounded-full mb-8 bg-[#D9E9F6] p-1">
          <span className="rounded-l-full">
            <Toggle
              label="GV CAMP"
              isActive={activeGVCamp}
              onToggle={() => {
                setActiveGVCamp(true);
                setActiveAVCamp(false);
              }}
            />
          </span>
          <Toggle
            label="AV CAMP"
            isActive={activeAVCamp}
            onToggle={() => {
              setActiveGVCamp(false);
              setActiveAVCamp(true);
            }}
          />
        </div>

        {/* Tables */}
        {activeSection === "staff" && (
          <div>
            {activeGVCamp && (
              <div>
                <div className="w-full">
                  <h1 className="text-2xl lg:text-[33.8px] font-bold uppercase">
                    Teaching Staff
                  </h1>
                  <div className="py-5">
                    <div className="max-w-4xl w-full">
                      <StaffGvTeachingTable />
                    </div>
                  </div>
                </div>
                <div className="  w-ful">
                  <h1 className="text-2xl lg:text-[33.8px] font-bold uppercase">
                    Non Teaching Staff
                  </h1>
                  <div className="py-5">
                    <div className="max-w-4xl w-full">
                      <StaffGvNonteachingTable />
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeAVCamp && (
              <div>
                <div className="lg:max-w-6xl w-full">
                  <h1 className="text-2xl lg:text-[33.8px] font-bold uppercase">
                    Teaching Staff
                  </h1>
                  <div className="py-5">
                    <div className="max-w-4xl w-full">
                      <StaffAvTeachingTable />
                    </div>
                  </div>
                </div>
                <div className="lg:max-w-6xl w-full">
                  <h1 className="text-2xl lg:text-[33.8px] font-bold uppercase">
                    Non Teaching Staff
                  </h1>
                  <div className="py-5">
                    <div className="max-w-4xl w-full">
                      <StaffAvNonteachingTable />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {activeSection === "student" && (
          <div>
            {activeGVCamp && (
              <div>
                <h1 className="text-2xl lg:text-[33.8px] font-bold mb-6">
                  GV Camp Student Council
                </h1>
                <div className="max-w-4xl w-full">
                  <StudentCouncilGvTable />
                </div>
              </div>
            )}
            {activeAVCamp && (
              <div>
                <h1 className="text-2xl lg:text-[33.8px] font-bold mb-6">
                  AV Camp Student Council
                </h1>
                <div className="max-w-4xl w-full">
                  <StudentCouncilAvTable />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default StaffStudent;
