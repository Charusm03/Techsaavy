"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated";

const people = [
	{
		id: 1,
		name: "Mr. Manoj Kanna K",
		designation: "EXECUTIVE PRESIDENT",
		image: "/manoj.jpg",
	},
	{
		id: 2,
		name: "Ms. Padma Suruthi S",
		designation: "OPERATIONS MANAGER",
		image: "/padma.jpg",
	},
	{
		id: 3,
		name: "Mr. Pradeep P",
		designation: "GENERAL SECRETARY",
		image: "/pradeep.jpg",
	},
	{
		id: 4,
		name: "Ms. Nandheetha V",
		designation: "PROJECT HEAD",
		image: "/nandheetha.jpg",
	},
	{
		id: 5,
		name: "Mr. Krishna Kumar E",
		designation: "TREASURER",
		image: "/krishna.jpg",
	},
	{
		id: 6,
		name: "Mr. Pravin B H",
		designation: "EDITORIAL HEAD",
		image: "/pravin.jpg",
	},
	{
		id: 7,
		name: "Mr. Gowtham M",
		designation: "VICE PRESIDENT",
		image: "/gowtham.jpg",
	},
	{
		id: 8,
		name: "Mr. Lingesh J",
		designation: "TECH LEAD",
		image: "/lingesh.jpg",
	},
	{
		id: 9,
		name: "Mr. Pavithran A G",
		designation: "OPERATION LEAD",
		image: "/pavithran.jpg",
	},
	{
		id: 10,
		name: "Ms. Ananya G",
		designation: "EVENT HEAD",
		image: "/ananya.jpg",
	},
	{
		id: 11,
		name: "Ms. Charu S M",
		designation: "DESIGN HEAD",
		image: "/charu.jpg",
	},
	{
		id: 12,
		name: "Mr. Madhu Ram Prakash C",
		designation: "BRAND MANAGER",
		image: "/maddy.jpg",
	},
	{
		id: 13,
		name: "Mr. Sajjad Ahmed T A",
		designation: "TREASURY ASSOCIATE",
		image: "/sajjad.jpg",
	},
	{
		id: 14,
		name: "Mr. Varun Muthu Akash B",
		designation: "SECRETARY",
		image: "/varun.jpg",
	},
	{
		id: 15,
		name: "Ms. Raagavi S",
		designation: "EVENT LEAD",
		image: "/raagavi.jpg",
	},
	{
		id: 16,
		name: "Ms. Hasna Fahima",
		designation: "DEVELOPMENT LEAD",
		image: "/hasna.jpg",
	},
	{
		id: 17,
		name: "Mr. Anirudhram G",
		designation: "IDEATION SPECIALIST",
		image: "/anirudh.jpg",
	},
	{
		id: 18,
		name: "Mr. T S Shanmukh Vashtav",
		designation: "PROJECT ANALYST",
		image: "/vashtav.jpg",
	},
	{
		id: 19,
		name: "Ms. Bhavya Shree G",
		designation: "DESIGN LEAD",
		image: "/bhavya.jpg",
	},
	{
		id: 20,
		name: "Mr. Sundaresan S",
		designation: "CONTENT CREATOR",
		image: "/sundaresan.jpg",
	},
	{
		id: 21,
		name: "Ms. Radhika M",
		designation: "PUBLIC RELATIONS ASSOCIATE",
		image: "/radhika.jpg",
	},
	{
		id: 22,
		name: "Mr. Mimith Fredderik R",
		designation: "TREASURY LEAD",
		image: "/mimith.jpg",
	},
];

export function AnimatedTooltipPreview() {
	return (
		<div className="w-full max-w-7xl mx-auto px-4">
			{/* Grid layout for better organization */}
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6 mb-10">
				{people.map((person) => (
					<div key={person.id} className="flex justify-center">
						<AnimatedTooltip items={[person]} />
					</div>
				))}
			</div>

			{/* Alternative: Flexbox with better wrapping */}
			{/* <div className="flex flex-wrap justify-center gap-4 mb-10 max-w-6xl mx-auto">
        {people.map((person) => (
          <AnimatedTooltip key={person.id} items={[person]} />
        ))}
      </div> */}
		</div>
	);
}
