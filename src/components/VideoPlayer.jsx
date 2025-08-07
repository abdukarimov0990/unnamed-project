import React, { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";

const VideoPlayer = ({ videoSrc, preview, className = "" }) => {
    const videoRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isStarted, setIsStarted] = useState(false); // Faqat birinchi bosilganda true bo'ladi

    const handlePlayPause = () => {
        const video = videoRef.current;
        if (!video) return;

        if (video.paused) {
            video.play();
            setIsPlaying(true);
            setIsStarted(true);
        } else {
            video.pause();
            setIsPlaying(false);
        }
    };

    return (
        <div
            className={`relative h-[296px] w-full overflow-hidden group ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Preview image (show only before video starts) */}
            {!isStarted && preview && (
                <img
                    src={preview}
                    alt="Video preview"
                    className="absolute inset-0 h-full w-full object-cover z-0"
                />
            )}

            {/* Video */}
            <video
                ref={videoRef}
                src={videoSrc}
                className={`h-full w-full object-cover z-0 ${!isStarted ? "invisible" : "visible"}`}
                onEnded={() => setIsPlaying(false)}
                preload="metadata"
                playsInline
                muted
                controls={false}
            />

            {/* Overlay with blur and play icon */}
            {!isPlaying && isHovered && (
                <button
                    onClick={handlePlayPause}
                    className="absolute inset-0 z-10 flex items-center justify-center backdrop-blur-sm bg-black/40 bg-opacity-40 text-white transition duration-300"
                >
                    <FaPlay className="text-3xl" />
                </button>
            )}

            {/* Transparent click area when playing */}
            {isPlaying && (
                <button
                    onClick={handlePlayPause}
                    className="absolute inset-0 z-10"
                />
            )}
        </div>
    );
};

export default VideoPlayer;
