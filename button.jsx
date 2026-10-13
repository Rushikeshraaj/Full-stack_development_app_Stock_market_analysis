function Button({ label, onClick }) {
  return (
    <button className="view-btn" onClick={onClick}>
      {label}
    </button>
  )
}

export default Button