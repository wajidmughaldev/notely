const BlurOverlay = () => (
    <div className="w-full h-full">
      <div className="absolute top-0 left-10 w-100 h-100 rounded-full bg-red-200/70 blur-2xl" />
      <div className="absolute bottom-10 right-20 w-75 h-75 rounded-full bg-yellow-200/80 blur-3xl" />
    </div>
  );
  
  export default BlurOverlay;
  