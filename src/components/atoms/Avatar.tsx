interface AvatarProps {
  icon?: string;
  imageSrc?: string;
  alt?: string;
}

export function Avatar({ icon, imageSrc, alt = "Avatar" }: AvatarProps) {
  return (
    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary shadow-md hover:scale-110">
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-4xl">
          {icon}
        </div>
      )}
    </div>
  );
}
