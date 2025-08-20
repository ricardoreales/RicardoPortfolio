# Custom Hooks

## useScrollControlledCarousel

Hook personalizado para controlar un carousel mediante scroll. Cuando el usuario hace scroll hasta la sección que contiene el carousel, automáticamente toma control del scroll y navega por todos los slides antes de permitir que el scroll continúe normalmente.

### Características

- **Detección automática**: Usa Intersection Observer para detectar cuando la sección entra en viewport
- **Control de scroll**: Previene el scroll natural mientras el carousel está activo
- **Navegación automática**: Mueve automáticamente a través de todos los slides
- **Optimización de rendimiento**: Usa memoización y limpieza eficiente de eventos
- **TypeScript**: Completamente tipado para mejor experiencia de desarrollo

### Uso

```tsx
import { useScrollControlledCarousel } from "@/hooks/useScrollControlledCarousel";
import useEmblaCarousel from "embla-carousel-react";

const MyCarouselComponent = ({ data }: { data: any[] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    dragFree: false,
  });

  const {
    sectionRef,
    setEmblaApi,
    isScrollLocked,
    currentSlide,
    isCarouselActive,
  } = useScrollControlledCarousel({
    itemsCount: data.length,
    autoScrollDuration: 1200, // Tiempo entre slides en ms
    threshold: 0.3, // Porcentaje de la sección visible para activar
  });

  // Conectar embla API con el hook
  useEffect(() => {
    setEmblaApi(emblaApi);
  }, [emblaApi, setEmblaApi]);

  return (
    <section ref={sectionRef}>
      {/* Indicador de progreso */}
      {isCarouselActive && (
        <div>
          {currentSlide + 1} / {data.length}
        </div>
      )}
      
      {/* Tu carousel aquí */}
    </section>
  );
};
```

### Parámetros

| Parámetro | Tipo | Default | Descripción |
|-----------|------|---------|-------------|
| `itemsCount` | `number` | - | Número total de slides en el carousel |
| `autoScrollDuration` | `number` | `1000` | Duración en milisegundos entre cada slide |
| `threshold` | `number` | `0.1` | Porcentaje de la sección visible para activar el carousel |

### Retorno

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| `sectionRef` | `RefObject<HTMLElement>` | Ref para el elemento section contenedor |
| `setEmblaApi` | `Function` | Función para establecer la API de Embla |
| `isScrollLocked` | `boolean` | Indica si el scroll está bloqueado |
| `currentSlide` | `number` | Índice del slide actual |
| `isCarouselActive` | `boolean` | Indica si el carousel está activo |

### Notas de Implementación

1. **Intersection Observer**: Se usa con `rootMargin: "-10% 0px -10% 0px"` para activar solo cuando la sección está bien dentro del viewport
2. **Event Listeners**: Se previenen eventos de wheel, touchmove y teclado mientras el carousel está activo
3. **Cleanup**: Todos los timeouts y event listeners se limpian automáticamente
4. **Performance**: Los event handlers están memoizados para evitar re-renders innecesarios

### Dependencias

- `embla-carousel-react`: Para el carousel base
- `react`: Hooks de React (useState, useEffect, useCallback, etc.)
