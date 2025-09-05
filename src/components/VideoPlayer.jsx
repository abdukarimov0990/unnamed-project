import React, { useRef, useState, useEffect } from "react";
import { FaPlay, FaPause, FaExpand, FaCompress, FaForward, FaBackward } from "react-icons/fa";

const VideoPlayer = ({ videoSrc, className = "" }) => {
    const videoRef = useRef(null);
    const containerRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [showControls, setShowControls] = useState(true);

    // Video yuklanganida davomiylikni o'rnatish
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handleLoadedMetadata = () => {
            if (!isNaN(video.duration)) {
                setDuration(video.duration);
            }
        };

        const handleTimeUpdate = () => {
            setCurrentTime(video.currentTime);
        };

        const handleDurationChange = () => {
            if (!isNaN(video.duration)) {
                setDuration(video.duration);
            }
        };

        video.addEventListener('loadedmetadata', handleLoadedMetadata);
        video.addEventListener('timeupdate', handleTimeUpdate);
        video.addEventListener('durationchange', handleDurationChange);

        return () => {
            video.removeEventListener('loadedmetadata', handleLoadedMetadata);
            video.removeEventListener('timeupdate', handleTimeUpdate);
            video.removeEventListener('durationchange', handleDurationChange);
        };
    }, []);

    // Kontrollerni avtomatik yashirish
    useEffect(() => {
        let timeout;
        if (isPlaying && showControls) {
            timeout = setTimeout(() => {
                setShowControls(false);
            }, 3000);
        }
        return () => clearTimeout(timeout);
    }, [isPlaying, showControls]);

    const handlePlayPause = () => {
        const video = videoRef.current;
        if (!video) return;

        if (video.paused) {
            video.play();
            setIsPlaying(true);
        } else {
            video.pause();
            setIsPlaying(false);
        }
        setShowControls(true);
    };

    const handleFullscreen = () => {
        const container = containerRef.current;
        if (!container) return;

        if (!document.fullscreenElement) {
            container.requestFullscreen().catch(err => {
                console.log(`Fullscreen error: ${err.message}`);
            });
            setIsFullscreen(true);
        } else {
            document.exitFullscreen();
            setIsFullscreen(false);
        }
    };

    const handleSeek = (seconds) => {
        const video = videoRef.current;
        if (!video) return;

        video.currentTime = Math.max(0, Math.min(video.duration, video.currentTime + seconds));
        setShowControls(true);
    };

    const handleProgressClick = (e) => {
        const video = videoRef.current;
        const progressBar = e.currentTarget;
        if (!video || !progressBar) return;

        const rect = progressBar.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        video.currentTime = percent * video.duration;
        setShowControls(true);
    };

    const formatTime = (time) => {
        // Agar time NaN yoki undefined bo'lsa, 0 qaytar
        if (isNaN(time) || time === undefined) {
            return "0:00";
        }
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <div
            ref={containerRef}
            className={`relative h-[296px] w-full overflow-hidden group ${className}`}
            onMouseEnter={() => {
                setIsHovered(true);
                setShowControls(true);
            }}
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={() => setShowControls(true)}
        >
            {/* Video */}
            <video
                ref={videoRef}
                src={videoSrc}
                className="h-full w-full object-cover"
                onEnded={() => setIsPlaying(false)}
                preload="metadata"
                playsInline
                muted
                controls={false}
                onClick={handlePlayPause}
            />

            {/* Kontrollerlar paneli */}
            {(isHovered || showControls || !isPlaying) && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 z-20 transition-opacity duration-300">
                    {/* Progress bar */}
                    <div 
                        className="w-full h-2 bg-gray-600 rounded-full mb-2 cursor-pointer"
                        onClick={handleProgressClick}
                    >
                        <div 
                            className="h-full bg-red-600 rounded-full transition-all duration-100"
                            style={{ width: `${(currentTime / (duration || 1)) * 100}%` }}
                        />
                    </div>

                    {/* Kontroller tugmalari */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            {/* Orqaga 10 soniya */}
                            <button
                                onClick={() => handleSeek(-10)}
                                className="text-white hover:text-gray-300 transition-colors"
                                title="10 секунд назад"
                            >
                                <FaBackward />
                            </button>

                            {/* Play/Pause */}
                            <button
                                onClick={handlePlayPause}
                                className="text-white hover:text-gray-300 transition-colors"
                                title={isPlaying ? "Пауза" : "Играть"}
                            >
                                {isPlaying ? <FaPause /> : <FaPlay />}
                            </button>

                            {/* Oldinga 10 soniya */}
                            <button
                                onClick={() => handleSeek(10)}
                                className="text-white hover:text-gray-300 transition-colors"
                                title="10 секунд вперед"
                            >
                                <FaForward />
                            </button>
                        </div>

                        {/* Vaqt ko'rsatgichi */}
                        <div className="text-white text-sm">
                            {formatTime(currentTime)} / {formatTime(duration)}
                        </div>

                        {/* Fullscreen tugmasi */}
                        <button
                            onClick={handleFullscreen}
                            className="text-white hover:text-gray-300 transition-colors"
                            title={isFullscreen ? "Выйти из полноэкранного режима" : "Полноэкранный режим"}
                        >
                            {isFullscreen ? <FaCompress /> : <FaExpand />}
                        </button>
                    </div>
                </div>
            )}

            {/* Markaziy play/pause tugmasi */}
            {!isPlaying && (
                <button
                    onClick={handlePlayPause}
                    className="absolute inset-0 z-10 flex items-center justify-center bg-black/30 text-white transition duration-300"
                >
                    <FaPlay className="text-4xl" />
                </button>
            )}
        </div>
    );
};

export default VideoPlayer;