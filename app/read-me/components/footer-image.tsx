;/>

• Delete `
\`  
• Replace the `
return` block with:

``\`tsx\
return (
  <div className="w-full">
    <img
      src={imageSrc || "/placeholder.svg"}
      alt={alt}
      width={imgWidth}
      height={imgHeight}
      className="w-full h-auto object-cover"
      loading="lazy"
      onError={handleImageError}
    />
  </div>
)
