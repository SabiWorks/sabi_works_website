"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Star,
  MapPin,
  Heart,
  Phone,
  Mail,
  Calendar,
  Award,
  CheckCircle,
  Clock,
  Shield,
  ThumbsUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface PopularProject {
  id: string;
  providerName: string;
  role: string;
  location: string;
  rating: number;
  reviewCount: number;
  description: string;
  isFavorite: boolean;
  image?: string;
  phone?: string;
  email?: string;
  experience?: string;
  completedJobs?: number;
  responseTime?: string;
  verified?: boolean;
  skills?: string[];
  reviews?: {
    id: string;
    customerName: string;
    rating: number;
    comment: string;
    date: string;
  }[];
}

const popularProjects: PopularProject[] = [
  {
    id: "1",
    providerName: "Bereket Melese",
    role: "Furniture Assembly Specialist",
    location: "New York, NY",
    rating: 4.9,
    reviewCount: 127,
    description:
      "Expert in IKEA and custom furniture assembly. Fast, reliable, and meticulous work with 8+ years of experience. I handle everything from simple desk setups to complex entertainment centers.",
    isFavorite: false,
    image: "/images/11.jpg",
    phone: "+1 (555) 123-4567",
    email: "bereket.m@sabiworks.com",
    experience: "8+ years",
    completedJobs: 450,
    responseTime: "< 2 hours",
    verified: true,
    skills: [
      "IKEA Assembly",
      "Custom Furniture",
      "TV Mounting",
      "Office Setup",
      "Quality Assurance",
    ],
    reviews: [
      {
        id: "1",
        customerName: "Sarah Johnson",
        rating: 5,
        comment:
          "Bereket assembled our entire IKEA kitchen in just 3 hours! Everything was perfect and he was so professional.",
        date: "2024-11-01",
      },
      {
        id: "2",
        customerName: "Mike Chen",
        rating: 5,
        comment:
          "Outstanding work on our office furniture setup. Very detail-oriented and cleaned up perfectly.",
        date: "2024-10-28",
      },
      {
        id: "3",
        customerName: "Emma Davis",
        rating: 4,
        comment:
          "Great service! Assembled our bedroom set quickly and efficiently. Would definitely recommend.",
        date: "2024-10-25",
      },
    ],
  },
  {
    id: "2",
    providerName: "Mulualem Tarekegn",
    role: "Home Cleaning Pro",
    location: "Los Angeles, CA",
    rating: 4.8,
    reviewCount: 89,
    description:
      "Deep cleaning specialist with 5+ years experience using eco-friendly products. I provide thorough cleaning services for homes and offices with attention to every detail.",
    isFavorite: true,
    image: "/images/12.jpg",
    phone: "+1 (555) 234-5678",
    email: "mulualem.t@sabiworks.com",
    experience: "5+ years",
    completedJobs: 320,
    responseTime: "< 1 hour",
    verified: true,
    skills: [
      "Deep Cleaning",
      "Eco-friendly Products",
      "Office Cleaning",
      "Move-in/Move-out",
      "Disinfection",
    ],
    reviews: [
      {
        id: "1",
        customerName: "David Wilson",
        rating: 5,
        comment:
          "Mulualem did an amazing job cleaning our house before selling. Used great products and was very thorough.",
        date: "2024-11-02",
      },
      {
        id: "2",
        customerName: "Lisa Rodriguez",
        rating: 5,
        comment:
          "Best cleaning service I've ever used! Our office looks brand new and the team was professional.",
        date: "2024-10-30",
      },
    ],
  },
  {
    id: "3",
    providerName: "Bereket Alemayehu",
    role: "Moving & Mounting Expert",
    location: "Chicago, IL",
    rating: 4.7,
    reviewCount: 156,
    description:
      "Professional mover and TV mounting specialist with 6+ years experience. I handle residential and commercial moves with care and precision.",
    isFavorite: false,
    image: "/images/13.jpg",
    phone: "+1 (555) 345-6789",
    email: "bereket.a@sabiworks.com",
    experience: "6+ years",
    completedJobs: 280,
    responseTime: "< 3 hours",
    verified: true,
    skills: [
      "Residential Moving",
      "TV Mounting",
      "Furniture Moving",
      "Packing Services",
      "Heavy Lifting",
    ],
    reviews: [
      {
        id: "1",
        customerName: "James Brown",
        rating: 5,
        comment:
          "Moved our entire apartment across town. Everything arrived safely and on time. Highly recommend!",
        date: "2024-11-03",
      },
      {
        id: "2",
        customerName: "Maria Garcia",
        rating: 4,
        comment:
          "Great moving service. Careful with our belongings and professional throughout the process.",
        date: "2024-10-29",
      },
    ],
  },
  {
    id: "4",
    providerName: "Yohannes Alemu",
    role: "Outdoor Help Specialist",
    location: "Austin, TX",
    rating: 4.9,
    reviewCount: 73,
    description:
      "Gardening and outdoor maintenance expert with 7+ years experience. From lawn care to seasonal cleanups, I keep your outdoor spaces beautiful year-round.",
    isFavorite: true,
    image: "/images/14.jpg",
    phone: "+1 (555) 456-7890",
    email: "yohannes.a@sabiworks.com",
    experience: "7+ years",
    completedJobs: 195,
    responseTime: "< 4 hours",
    verified: true,
    skills: [
      "Lawn Care",
      "Gardening",
      "Seasonal Cleanup",
      "Tree Trimming",
      "Irrigation",
    ],
    reviews: [
      {
        id: "1",
        customerName: "Robert Taylor",
        rating: 5,
        comment:
          "Yohannes transformed our backyard! The garden looks amazing and he maintains it perfectly.",
        date: "2024-11-01",
      },
      {
        id: "2",
        customerName: "Jennifer Lee",
        rating: 5,
        comment:
          "Excellent outdoor maintenance service. Always on time and does quality work.",
        date: "2024-10-27",
      },
    ],
  },
];

export default function ProfilePage() {
  const params = useParams();
  const router = useRouter();
  const profileId = params.id as string;

  const profile = popularProjects.find((p) => p.id === profileId);

  if (!profile) {
    return (
      <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center px-4 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Profile Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The profile you're looking for doesn't exist.
          </p>
          <Button asChild>
            <Link href="/">← Back to Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button
            variant="ghost"
            onClick={() => router.back()}
            className="flex items-center gap-2 hover:bg-gray-100"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Profile Card */}
          <div className="lg:col-span-2 space-y-6">
            {/* Hero Section */}
            <Card className="overflow-hidden">
              <div className="relative h-64 bg-linear-to-r from-blue-600 to-blue-800">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-20"
                  style={{ backgroundImage: `url(${profile.image})` }}
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="relative h-full flex items-end p-6">
                  <div className="flex items-end gap-6 w-full">
                    <div className="relative">
                      <div
                        className="w-24 h-24 rounded-full bg-cover bg-center border-4 border-white shadow-lg"
                        style={{ backgroundImage: `url(${profile.image})` }}
                      />
                      {profile.verified && (
                        <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <h1 className="text-2xl font-bold">
                          {profile.providerName}
                        </h1>
                        {profile.verified && (
                          <Badge
                            variant="secondary"
                            className="bg-green-500 text-white"
                          >
                            <Shield className="w-3 h-3 mr-1" />
                            Verified
                          </Badge>
                        )}
                      </div>
                      <p className="text-blue-100 text-lg mb-2">
                        {profile.role}
                      </p>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {profile.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                          {profile.rating} ({profile.reviewCount} reviews)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* About Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-blue-600" />
                  About {profile.providerName}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  {profile.description}
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">
                      {profile.experience}
                    </div>
                    <div className="text-sm text-gray-600">Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">
                      {profile.completedJobs}
                    </div>
                    <div className="text-sm text-gray-600">Jobs Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">
                      {profile.rating}
                    </div>
                    <div className="text-sm text-gray-600">Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">
                      {profile.responseTime}
                    </div>
                    <div className="text-sm text-gray-600">Response Time</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Skills Section */}
            <Card>
              <CardHeader>
                <CardTitle>Skills & Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {profile.skills?.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-blue-100 text-blue-800"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Reviews Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ThumbsUp className="w-5 h-5 text-blue-600" />
                  Recent Reviews ({profile.reviewCount})
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {profile.reviews?.map((review) => (
                  <div
                    key={review.id}
                    className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-medium text-gray-900">
                        {review.customerName}
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating
                                  ? "text-yellow-400 fill-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500 ml-1">
                          {review.date}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="font-medium">{profile.phone}</div>
                    <div className="text-sm text-gray-500">Phone</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="font-medium">{profile.email}</div>
                    <div className="text-sm text-gray-500">Email</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="font-medium">{profile.location}</div>
                    <div className="text-sm text-gray-500">Location</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="font-medium">{profile.responseTime}</div>
                    <div className="text-sm text-gray-500">Response Time</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                Book Now
              </Button>
              <Button variant="outline" className="w-full py-3">
                Send Message
              </Button>
              <Button variant="outline" className="w-full py-3">
                <Heart
                  className={`w-4 h-4 mr-2 ${
                    profile.isFavorite ? "text-red-500 fill-red-500" : ""
                  }`}
                />
                {profile.isFavorite
                  ? "Remove from Favorites"
                  : "Add to Favorites"}
              </Button>
            </div>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Completed Jobs</span>
                  <span className="font-semibold">{profile.completedJobs}</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-gray-600">Average Rating</span>
                  <span className="font-semibold">{profile.rating}/5.0</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-gray-600">Response Time</span>
                  <span className="font-semibold">{profile.responseTime}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
