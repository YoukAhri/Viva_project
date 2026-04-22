function NavLink({ href, children }) {
  return (
    <a 
      href={href} 
      className="text-[var(--text)] hover:text-[var(--accent)] transition duration-300 hover:drop-shadow-[0_0_8px_var(--accent)]"
    >
      {children}
    </a>
  )
}

export default NavLink