export function getKeyframeOptions(subject) {
  return {
    fill: 'both',
    timeline: new window.ViewTimeline({
      axis: 'block',
      subject
      // inset: [CSS.percent(0), CSS.percent(20)]
    }),
    rangeStart: 'cover 20%',
    rangeEnd: 'contain 100%'
  }
}
