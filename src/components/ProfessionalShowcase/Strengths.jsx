import useScrollReveal from "../../hooks/useScrollReveal";
const Strengths = () => {
  const { ref, isVisible } = useScrollReveal()
  return (
    <div ref={ref} className={`strengths reveal-left ${isVisible ? "active" : ""}`}>
      <ul>
        <li><i className="bx bx-check-circle"></i> Breaking problems into reusable components</li>
        <li><i className="bx bx-check-circle"></i> Debugging and fixing deployment issues</li>
        <li><i className="bx bx-check-circle"></i> Writing clean, readable code</li>
        <li><i className="bx bx-check-circle"></i> Learning quickly from mistakes</li>
      </ul>
    </div>
  )
}
export default Strengths;