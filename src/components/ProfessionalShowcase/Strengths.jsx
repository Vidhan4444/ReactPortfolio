import useScrollReveal from "../../hooks/useScrollReveal";
const Strenghts = () => {
  const { ref, isVisible } = useScrollReveal()
  return (
    <div ref={ref} className={`strengths reveal-left ${isVisible ? "active" : ""}`}>
      <ul>
        <li>Breaking problems into resuable components</li>
        <li>Debugging and fixing deployment issues</li>
        <li>Wriring clean,readable clean</li>
        <li>Learning qickly from mistakes</li>
      </ul>
    </div>
  )
}
export default Strenghts;