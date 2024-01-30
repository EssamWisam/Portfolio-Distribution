//@ts-nocheck
import React from "react";
import * as d3 from 'd3';



interface Node {
    name: string;
    value: number;
  }
  

  const BubbleSkills: React.FC<{ skills: Node[], id:string }> = ({ id, skills }) => {
      React.useEffect(() => {
    // Dimensions of the chart
    const w: number = 1000;
    const h: number = 550;
    const circleWidth: number = -30;

    // Color palette
    const palette = {
      lightgray: getComputedStyle(document.documentElement).getPropertyValue('--tertiary-color-affected'),
      gray: getComputedStyle(document.documentElement).getPropertyValue('--text-color'),
      mediumgray: getComputedStyle(document.documentElement).getPropertyValue('--secondary-color-affected'),
    };
    // getComputedStyle(document.documentElement).getPropertyValue('--text-color')
    // Colors for the circles
    //@ts-ignore
    const getGradientId = (index: number) => `gradient-${index}`;

    // Create SVG container
    const existingSVG = d3.select(`#${id} svg`);
    
    // If an SVG exists, use it; otherwise, create a new one
    const myChart = existingSVG.empty()
      ? d3
          .select('#' + id)
          .append('div')
          .classed('svg-container', true)
          .append('svg')
          .attr('preserveAspectRatio', 'xMinYMin meet')
          .attr('viewBox', '0 0 1000 550')
          .classed('svg-content-responsive', true)
      : existingSVG;

    // Create force layout
    const force = d3.layout.force()
      .nodes(skills)
      .links([])
      .gravity(0.13)
      .charge(-500)
      .size([w, h])

      const gradients = myChart
      .selectAll('defs')
      .data(skills)
      .enter()
      .append('defs')
      .append('linearGradient')
      .attr('id', (d: any, i: any) => getGradientId(i))
      .attr('x1', '0%')
      .attr('y1', '0%')
      .attr('x2', '50%')
      .attr('y2', '50%')
      .selectAll('stop')
      .data((d: any, i: any) => [
        { offset: '0%',  color: (i > skills.length/2) ? palette.mediumgray : palette.lightgray},
        { offset: '100%', color: (i > skills.length/2) ?  palette.lightgray : palette.mediumgray },
      ])
      .enter()
      .append('stop')
      .attr('offset', (d: any) => d.offset)
      .attr('stop-color', (d: any) => d.color);

    // Create groups for each node with drag behavior
    const node = myChart
      .selectAll('circle')
      .data(skills)
      .enter()
      .append('g')
      .call(force.drag);

    // Create circles for each node
    node
    .append('circle')
    .attr('cx', (d:any) => d.x)
    .attr('cy', (d:any) => d.y)
    .attr('r', (d:any, i:any) => (circleWidth + d.value))
    .attr('fill', (d:any, i:any) => (`url(#${getGradientId(i)})`))
  

    // Update node positions on tick
    force.on('tick', (e:any) => {
      node.attr('transform', (d: { x: number; y: number }) => `translate(${d.x},${d.y})`);
    });

    // Add text labels for each node
    node
    .append('text')
    .text((d: { name: string; value: number }, i: number) => d.name)
    .attr('font-family', 'Poppins')
    .attr('fill', (d: { value: number }, i: number) => palette.gray
    )
    .attr('text-anchor', 'middle')
    .attr('font-size', (d: { value: number }, i: number) => ( '.8em'))
    .attr('font-weight', (d: { value: number }, i: number) => ( '500'));


    // Start the force layout simulation
    force.start();

    // Cleanup function
    return () => {
      // Cleanup code if needed
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <div id={id} >
      {/* The SVG content will be appended here */}
    </div>
  );
};

export default BubbleSkills;
