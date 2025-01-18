import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const OrgChart = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    // Data for the organization chart
    const data = {
      name: "Cameron Williamson",
      title: "Founder - CEO",
      children: [
        {
          name: "Leslie Alexander",
          title: "Head of Project Manager",
          children: [
            { name: "Cody Firmansyah", title: "Senior Project Manager" },
            { name: "Jenni William", title: "Project Manager" },
          ],
        },
        {
          name: "Brooklyn Simmons",
          title: "Creative Director",
          children: [
            { name: "Ralph Edwards", title: "Senior UX Designer" },
            { name: "Brooklyn Hehe", title: "Senior Graphic Designer" },
            { name: "Vidi Gutierrez", title: "UX Designer" },
            { name: "Pablo Hive", title: "Graphic Designer" },
          ],
        },
        {
          name: "Cody Fisher",
          title: "Head of Development",
          children: [
            { name: "Asther Mulyani", title: "Senior Front-End" },
            { name: "Jenny Wilson", title: "QA Engineering" },
            { name: "Eden Khouriddin", title: "Back-End" },
          ],
        },
      ],
    };

    // Set up dimensions
    const width = window.innerWidth - 300;
    const height = 600;

    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    // Add background dots
    const dotSpacing = 20;
    svg.selectAll(".background-dot")
      .data(d3.range((width / dotSpacing) * (height / dotSpacing)))
      .join("circle")
      .attr("class", "background-dot w-full")
      .attr("cx", (_, i) => (i % (width / dotSpacing)) * dotSpacing)
      .attr("cy", (_, i) => Math.floor(i / (width / dotSpacing)) * dotSpacing)
      .attr("r", 1.5)
      .attr("fill", "#E5E7EB");

    const root = d3.hierarchy(data);

    const treeLayout = d3.tree().size([width - 200, height - 200]);
    treeLayout(root);

    // Links
    svg.selectAll(".link")
      .data(root.links())
      .join("path")
      .attr("class", "link stroke-gray-400")
      .attr("d", d3.linkVertical()
        .x(d => d.x + 100)
        .y(d => d.y + 100)) // Added extra spacing between sections
      .attr("fill", "none")
      .attr("stroke", "#CBD5E1")
      .attr("stroke-width", 2);

    // Nodes
    const node = svg.selectAll(".node")
      .data(root.descendants())
      .join("g")
      .attr("class", "node")
      .attr("transform", d => `translate(${d.x + 100},${d.y + 100})`); // Added extra spacing between sections

    // Rectangles for nodes
    node.append("rect")
      .attr("class", "bg-gray-100 stroke-gray-400")
      .attr("width", 150)
      .attr("height", 60)
      .attr("y", -30)
      .attr("x", -75)
      .attr("rx", 8)
      .attr("stroke", "#94A3B8")
      .attr("fill", "#F1F5F9");

    // Name text
    node.append("text")
      .attr("class", "name text-gray-800 font-semibold")
      .attr("text-anchor", "middle")
      .attr("y", -5)
      .text(d => d.data.name);

    // Title text
    node.append("text")
      .attr("class", "title text-gray-500 text-sm")
      .attr("text-anchor", "middle")
      .attr("y", 15)
      .text(d => d.data.title);
  }, []);

  return (
    <div className="flex justify-center items-center bg-gray-50 p-4 rounded-lg border border-gray-300 mt-5">
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default OrgChart;
