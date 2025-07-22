'use client';

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { IProject } from '../types/project';
import { projectService } from '../services/projectService';
import ProjectCard from './ProjectCard';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ISwiperCarouselProps {
  className?: string;
  autoplay?: boolean;
  autoplayDelay?: number;
  showNavigation?: boolean;
  showPagination?: boolean;
  loop?: boolean;
  spaceBetween?: number;
}

const SwiperCarousel: React.FC<ISwiperCarouselProps> = ({
  className = '',
  autoplay = true,
  autoplayDelay = 3000,
  showNavigation = true,
  showPagination = true,
  loop = true,
  spaceBetween = 30,
}) => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Load projects data
  useEffect(() => {
    const loadProjects = async () => {
      try {
        const projectsData = projectService.getFeaturedProjects();
        setProjects(projectsData);
      } catch (error) {
        console.error('Error loading projects:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProjects();
  }, []);

  const handleProjectClick = (projectId: number) => {
    const project = projectService.getProjectById(projectId);
    if (project) {
      // Here you could navigate to project detail or open modal
      console.log('Project clicked:', project);
    }
  };

  const handleSlideChange = (swiper: SwiperType) => {
    setCurrentIndex(swiper.activeIndex);
  };

  if (isLoading) {
    return (
      <div className="py-[60px] sm:py-[80px] bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16">
          <div className="h-[500px] flex items-center justify-center">
            <div className="animate-pulse bg-gray-200 rounded-[30px] w-[280px] h-[480px]" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <section 
      className={`py-[60px] sm:py-[80px] bg-gradient-to-br from-slate-50 to-gray-100 ${className}`}
      aria-labelledby="carousel-title"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16">
        {/* Header */}
        <header className="mb-8 sm:mb-12 text-center">
          <h2 
            id="carousel-title"
            className="font-bold text-[24px] sm:text-[32px] lg:text-[36px] text-gray-900 mb-2"
          >
            Proyectos Destacados
          </h2>
          <p className="text-gray-600 text-[14px] sm:text-[16px] mb-4">
            Explora nuestros últimos trabajos y soluciones creativas
          </p>
          <div className="text-xs sm:text-sm text-gray-500">
            Desliza para explorar • {projects.length} proyectos disponibles
          </div>
        </header>

        {/* Swiper Container */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={spaceBetween}
            slidesPerView={1}
            loop={loop}
            autoplay={autoplay ? {
              delay: autoplayDelay,
              disableOnInteraction: false,
            } : false}
            navigation={showNavigation}
            pagination={showPagination ? {
              clickable: true,
              dynamicBullets: true,
            } : false}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1280: {
                slidesPerView: 3.2,
                spaceBetween: 50,
              },
            }}
            onSlideChange={handleSlideChange}
            className="h-[520px] mySwiper"
            style={{
              '--swiper-navigation-color': '#1f2937',
              '--swiper-pagination-color': '#3b82f6',
              '--swiper-pagination-bullet-inactive-color': '#d1d5db',
              '--swiper-pagination-bullet-size': '12px',
            } as React.CSSProperties}
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id} className="h-full">
                <ProjectCard
                  project={project}
                  isActive={currentIndex === project.id - 1}
                  onClick={() => handleProjectClick(project.id)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Progress Info */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <div className="text-sm text-gray-500">
            {currentIndex + 1} / {projects.length}
          </div>
        </div>

        {/* Schema.org JSON-LD for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ItemList',
              name: 'Proyectos Destacados',
              description: 'Colección de proyectos destacados de desarrollo web y diseño',
              numberOfItems: projects.length,
              itemListElement: projects.map((project, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                item: {
                  '@type': 'CreativeWork',
                  name: project.title,
                  description: project.description,
                  category: project.category,
                  creator: {
                    '@type': 'Organization',
                    name: project.company,
                  },
                  image: project.image,
                  url: project.url,
                },
              })),
            }),
          }}
        />
      </div>
    </section>
  );
};

export default SwiperCarousel; 