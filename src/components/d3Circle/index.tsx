import React, { useEffect, useState } from 'react';
/* import { useFocusEffect } from '@react-navigation/native' */
import * as d3 from 'd3';

export default function RadialProgress(props) {
  const [tmp, setTmp] = useState(props.prev);

  const outerRadius = Math.min(props.height, props.width) * 0.45;
  const styles = props.progSty
  const thickness = props.thickness;

  const mainArc = d3.arc()
    .startAngle(Math.PI)
    .endAngle(-Math.PI)
    .innerRadius(outerRadius-thickness)
    .outerRadius(outerRadius)

  // UseEffect hook updates the D3 animations
  useEffect(() => {
    const previousValue = props.valPrev;
    const startValue = props.value;
    const endAngle = Math.PI * startValue / 50;
    const startAngle = Math.PI * previousValue / 50
    const angleDiff = endAngle - startAngle;
    const startAngleDeg = startAngle / Math.PI * 180
    const angleDiffDeg = angleDiff / Math.PI * 180
    const transitionDuration = 1500
    d3.select(".progress-bar").transition().duration(transitionDuration).attrTween('d', function(){
        return function(t) {
          mainArc.endAngle(startAngle + angleDiff * t)
        return mainArc();
        }
    })
    d3.select(".progress-bar2").transition().duration(transitionDuration).attrTween('transform', function(){
        return function(t) {
        return `translate(${props.width/2},${props.height/2})`+
          `rotate(${(startAngleDeg + angleDiffDeg * t)})`+
          `translate(0,-${outerRadius-thickness/2})`
        }
    })
    /* Label */
    /* 
      percentLabel.transition().duration(transitionDuration).tween('bla', function() {
          return function(t) {
            percentLabel.text(Math.round(startValue + (progressPercent - startValue) * t));
          }
          })
    */
    props.setprev(startValue);
  }, [props.value]) 
// Second input is the dependency array, causes useEffect to not fire twice when we call setState

  return (
      <div className="widget" style={styles.widget} width={props.width} height={props.height}>
          <svg width={props.width} height={props.height}>
            <path 
                className="progress-bar-bg" // Path background
                style={styles.progressbarbg}
                transform={`translate(${props.width/2},${props.height/2})`} 
                d={mainArc()}
            />
            <path 
                className="progress-bar" // Main path;; this is the path we animate
                style={styles.progressbar}
                transform={`translate(${props.width/2},${props.height/2})`} 
                width={thickness}
                height={thickness}
                r={thickness/2}            
            />
            <circle 
                className="progress-bar2" // End-circle
                style={styles.progressbar}
                transform={`translate(${props.width/2},${props.height/2-outerRadius+thickness/2})`} 
                width={thickness}
                height={thickness}
                r={thickness/2}
            />
            <circle 
                className="progress-bar-circ" // Start Circle
                style={styles.progressbar}
                transform={`translate(${props.width/2},${props.height/2+outerRadius-thickness/2})`} 
                width={thickness}
                height={thickness}
                r={thickness/2}
            />
          </svg>
      </div>
  )
}

/*  let chart = radialProgress('.widget')
let progress = [100,0,5,20,35,70,90,100,0]
let state = 0
d3.interval(function(){
  chart.update(progress[state])
  state = (state + 1) % progress.length
}, 2000) */
