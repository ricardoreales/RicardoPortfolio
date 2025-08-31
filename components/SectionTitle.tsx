import React from "react"

export const SectionTitle = ({
  title,
  description,
}: {
  title: string
  description: string
}) => {
  return (
    <div className="rr-section-text">
      <h4 className="rr-title">{title}</h4>
      <p className="rr-description">{description}</p>
    </div>
  )
}
