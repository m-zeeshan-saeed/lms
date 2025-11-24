"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { StarIcon } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Course {
  id: number;
  title: string;
  description: string;
  content: string;
  imageUrl: string;
  instructorId: number;
  createdAt: string;
  updatedAt: string;
}

const CourseCard = ({ course }: { course: Course }) => {
  const { title, description, imageUrl, id } = course;
  return (
    <div className="p-4 -mx-2 w-[20%]">
      <Card className="py-4">
        <CardContent className="px-3">
          <div className="aspect-square rounded-md bg-gray-100 mb-2">
            <img
              src={imageUrl}
              className="w-full h-full object-cover object-center"
              alt={`Product image ${id}`}
              width={500}
              height={500}
            />
          </div>
          <CardTitle className="text-sm mb-1">{title}</CardTitle>
          <CardDescription className="text-xs mb-2 line-clamp-2">
            {description}
          </CardDescription>
          <div className="flex items-center space-x-1 mb-2">
            <div className="flex">
              {[1, 2, 3, 4].map((star) => (
                <StarIcon
                  key={star}
                  className="h-3 w-3 fill-yellow-400 text-yellow-400"
                />
              ))}
              <StarIcon className="h-3 w-3 text-gray-300" />
            </div>
            <span className="text-xs text-muted-foreground">(4.0)</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold">$199</span>
            <Link href={`/dashboard/courses/${id}`}>
              <Button size="sm" className="text-xs px-3 py-1 h-7">
                Open
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default function CoursesContainer() {
  const [courses, setCourses] = useState<Course[]>([]);
  const fetchedRef = useRef(false);

  useEffect(() => {
    if (fetchedRef.current) return;
    fetchedRef.current = true;
    const fetchCourses = async () => {
      try {
        const response = await fetch("/api/courses");
        const result = await response.json();
        if (response.ok) setCourses(result);
      } catch (e) {
        console.log(e);
      }
    };
    fetchCourses();
  }, []);
  return (
    <div className="w-full px-4 flex items-stretch flex-wrap">
      {courses.length > 0
        ? courses.map((course, idx) => (
            <CourseCard key={course.id || idx} course={course} />
          ))
        : "No courses found"}
    </div>
  );
}
