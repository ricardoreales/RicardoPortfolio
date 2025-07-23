import React from "react";
import "./GlassContainer.css";

export const GlassContainer = ({ children  ,className}: { children: React.ReactNode ,className?: string}) => {
  return (
    <div className="GlassContainer ">
      <div className={`GlassContent ${className}`}>{children}</div>
      <div className="GlassMaterial">
        <div className="GlassEdgeReflection"></div>
        <div className="GlassEmbossReflection"></div>
        <div className="GlassRefraction"></div>
        <div className="GlassBlur"></div>
        <div className="BlendLayers"></div>
        <div className="BlendEdge"></div>
        <div className="Highlight"></div>
      </div>
    </div>
  );
};
