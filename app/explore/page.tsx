import CourseSection from "@/components/Explore/CourseSection";
import { featuredCourses, interviewCourses, learnCourses } from "@/data/featuredCourses";

export default function CoursesPage() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">

      <CourseSection
        title="Featured"
        courses={featuredCourses}
      />

      <CourseSection
        title="Interview"
        courses={interviewCourses}
      />

      <CourseSection
        title="Learn"
        courses={learnCourses}
      />

    </div>
  );
}