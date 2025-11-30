# 🎨 Design Tokens для Figma
## Платформа онлайн-курсов ТПУ

---

## 📐 Структура проекта

### Артборды (Desktop)
- **Hero Section**: 1440×900px
- **Categories Grid**: 1440×800px  
- **Popular Courses**: 1440×900px
- **Learning Steps**: 1440×700px
- **CTA Section**: 1440×400px
- **Footer**: 1440×500px

### Артборды (Mobile)
- **Mobile View**: 375×812px (iPhone X)

---

## 🎨 Цветовая палитра

### Основные цвета (Primary)
```
Primary (Синий образовательный)
HSL: 199° 89% 48%
HEX: #0BA0D6
RGB: 11, 160, 214

Primary Foreground (Текст на синем)
HEX: #FFFFFF
RGB: 255, 255, 255
```

### Вторичные цвета (Secondary)
```
Secondary (Фиолетовый технологический)
HSL: 262° 83% 58%
HEX: #7C3AED
RGB: 124, 58, 237

Secondary Foreground (Текст на фиолетовом)
HEX: #FFFFFF
RGB: 255, 255, 255
```

### Акцентные цвета (Accent)
```
Accent (Оранжевый энергичный)
HSL: 17° 88% 54%
HEX: #F97316
RGB: 249, 115, 22

Accent Foreground (Текст на оранжевом)
HEX: #FFFFFF
RGB: 255, 255, 255
```

### Фоновые цвета
```
Background (Основной фон)
HEX: #FFFFFF
RGB: 255, 255, 255

Foreground (Основной текст)
HSL: 222° 84% 5%
HEX: #020817
RGB: 2, 8, 23

Muted Background (Приглушенный фон)
HSL: 210° 40% 96%
HEX: #F1F5F9
RGB: 241, 245, 249

Muted Foreground (Приглушенный текст)
HSL: 215° 16% 47%
HEX: #64748B
RGB: 100, 116, 139
```

### Карточки и поповеры
```
Card Background
HEX: #FFFFFF
RGB: 255, 255, 255

Card Foreground (Текст на карточке)
HEX: #020817
RGB: 2, 8, 23

Border (Границы элементов)
HSL: 214° 32% 91%
HEX: #E2E8F0
RGB: 226, 232, 240
```

### Дополнительные цвета категорий
```
Blue-500 (Инженерные науки)
HEX: #3B82F6
RGB: 59, 130, 246

Purple-500 (IT)
HEX: #A855F7
RGB: 168, 85, 247

Green-500 (Естественные науки)
HEX: #22C55E
RGB: 34, 197, 94

Amber-500 (Материаловедение)
HEX: #F59E0B
RGB: 245, 158, 11

Yellow-500 (Энергетика)
HEX: #EAB308
RGB: 234, 179, 8

Indigo-500 (Физика)
HEX: #6366F1
RGB: 99, 102, 241

Pink-500 (Гуманитарные)
HEX: #EC4899
RGB: 236, 72, 153

Orange-500 (Управление)
HEX: #F97316
RGB: 249, 115, 22

Teal-500 (Доп. образование)
HEX: #14B8A6
RGB: 20, 184, 166
```

### Статус-цвета
```
Destructive (Ошибки)
HSL: 0° 84% 60%
HEX: #EF4444
RGB: 239, 68, 68

Success (Успех)
HEX: #22C55E
RGB: 34, 197, 94
```

---

## 🔤 Типографика

### Шрифтовые семейства
```
Headings: Montserrat
Weights: 600 (Semi Bold), 700 (Bold), 800 (Extra Bold)
Google Fonts: https://fonts.google.com/specimen/Montserrat

Body Text: Open Sans  
Weights: 400 (Regular), 600 (Semi Bold)
Google Fonts: https://fonts.google.com/specimen/Open+Sans
```

### Размеры текста (Desktop)
```
Hero Title (H1)
Font: Montserrat 800
Size: 60px (3.75rem)
Line Height: 72px (1.2)
Letter Spacing: -0.02em

Section Title (H2)
Font: Montserrat 700
Size: 48px (3rem)
Line Height: 58px (1.2)
Letter Spacing: -0.01em

Card Title (H3)
Font: Montserrat 700
Size: 24px (1.5rem)
Line Height: 32px (1.33)
Letter Spacing: normal

Subsection Title (H4)
Font: Montserrat 600
Size: 20px (1.25rem)
Line Height: 28px (1.4)
Letter Spacing: normal

Body Large
Font: Open Sans 400
Size: 20px (1.25rem)
Line Height: 32px (1.6)
Letter Spacing: normal

Body Regular
Font: Open Sans 400
Size: 16px (1rem)
Line Height: 26px (1.625)
Letter Spacing: normal

Body Small
Font: Open Sans 400
Size: 14px (0.875rem)
Line Height: 22px (1.57)
Letter Spacing: normal

Badge Text
Font: Open Sans 600
Size: 14px (0.875rem)
Line Height: 20px (1.43)
Letter Spacing: 0.01em

Button Text
Font: Open Sans 600
Size: 16px (1rem)
Line Height: 24px (1.5)
Letter Spacing: 0.01em
```

### Размеры текста (Mobile)
```
Hero Title (H1 Mobile)
Size: 36px (2.25rem)
Line Height: 44px (1.22)

Section Title (H2 Mobile)
Size: 32px (2rem)
Line Height: 40px (1.25)

Card Title (H3 Mobile)
Size: 20px (1.25rem)
Line Height: 28px (1.4)
```

---

## 📦 Компоненты

### Button (Кнопка)
```
Primary Button
Background: Primary (#0BA0D6)
Text: White (#FFFFFF)
Font: Open Sans 600, 16px
Padding: 12px 32px (vertical × horizontal)
Border Radius: 12px (0.75rem)
Height: 48px

Hover State:
Background: Darker Primary (scale 105%)
Transform: scale(1.05)
Transition: 200ms ease

Secondary Button (Outline)
Background: Transparent
Border: 2px solid Primary
Text: Primary
Same padding and radius as Primary
```

### Card (Карточка)
```
Background: White (#FFFFFF)
Border: 2px solid #E2E8F0
Border Radius: 16px (1rem)
Padding: 24px
Shadow: 0 1px 3px rgba(0,0,0,0.1)

Hover State:
Border: 2px solid Primary (#0BA0D6)
Shadow: 0 10px 40px rgba(11,160,214,0.15)
Transform: scale(1.05)
Transition: 300ms ease
```

### Badge (Бейдж)
```
Default Badge
Background: #F1F5F9
Text: #64748B
Font: Open Sans 600, 14px
Padding: 6px 16px
Border Radius: 20px (full rounded)

Secondary Badge
Background: Secondary (#7C3AED) at 20% opacity
Text: Secondary (#7C3AED)

Outline Badge
Background: Transparent
Border: 1px solid color
Text: matching color
```

### Icon Wrapper
```
Small Icon (16px)
Size: 16×16px

Medium Icon (24px)
Size: 24×24px

Large Icon (32px)
Size: 32×32px

XL Icon (64px)
Size: 64×64px

Icon Background Box
Size: 56×56px
Background: Primary at 20% opacity
Border Radius: 16px
```

---

## 📏 Spacing (Отступы)

### Base Unit: 4px

```
Space Scale:
0.5 → 2px
1   → 4px
2   → 8px
3   → 12px
4   → 16px
5   → 20px
6   → 24px
8   → 32px
10  → 40px
12  → 48px
16  → 64px
20  → 80px
24  → 96px
32  → 128px
```

### Layout Spacing
```
Container Max Width: 1440px
Container Padding: 32px (desktop), 16px (mobile)

Section Padding Vertical: 64px (desktop), 40px (mobile)

Card Gap (Grid): 24px

Content Max Width (Text): 800px
```

---

## 🎭 Effects & Shadows

### Box Shadows
```
Small Shadow (Cards)
0 1px 3px rgba(0, 0, 0, 0.1)

Medium Shadow (Hover Cards)
0 4px 12px rgba(0, 0, 0, 0.08)

Large Shadow (Active/Focused)
0 10px 40px rgba(11, 160, 214, 0.15)

Hero Shadow (Primary CTA)
0 8px 24px rgba(124, 58, 237, 0.2)
```

### Border Radius
```
Small: 8px (0.5rem)
Medium: 12px (0.75rem) — default
Large: 16px (1rem)
XL: 20px (1.25rem)
Full: 9999px (rounded-full for badges)
```

### Backdrop Effects
```
Header Backdrop Blur
Blur: 12px
Background: White at 80% opacity
```

---

## 🎬 Animations

### Timing Functions
```
Ease Out: cubic-bezier(0, 0, 0.2, 1)
Ease In Out: cubic-bezier(0.4, 0, 0.2, 1)
```

### Animation Durations
```
Fast: 200ms
Medium: 300ms
Slow: 600ms
```

### Keyframe Animations
```
fade-in:
From: opacity 0, translateY(20px)
To: opacity 1, translateY(0)
Duration: 600ms ease-out

scale-in:
From: scale(0.95), opacity 0
To: scale(1), opacity 1
Duration: 400ms ease-out

slide-up:
From: translateY(10px), opacity 0
To: translateY(0), opacity 1
Duration: 500ms ease-out
```

### Hover Effects
```
Button/Card Hover:
Transform: scale(1.05)
Transition: 200-300ms

Link Underline:
Width: 0 → 100%
Height: 2px
Transition: 300ms ease
Origin: bottom-right → bottom-left
```

---

## 🖼️ Layout Grid

### Desktop Grid
```
Columns: 12
Gutter: 24px
Margin: 32px
Max Width: 1440px
```

### Tablet Grid
```
Columns: 8
Gutter: 20px
Margin: 24px
```

### Mobile Grid
```
Columns: 4
Gutter: 16px
Margin: 16px
Max Width: 375px
```

---

## 📱 Breakpoints

```
Mobile: 320px - 767px
Tablet: 768px - 1023px
Desktop: 1024px+
Large Desktop: 1440px+
```

---

## 🎯 Использование в Figma

### Шаг 1: Создай цветовую палитру
1. Создай Local Styles для каждого цвета
2. Назови их: `Primary/Default`, `Primary/Foreground`, `Secondary/Default` и т.д.
3. Используй HSL значения для точности

### Шаг 2: Настрой типографику
1. Добавь Text Styles для каждого размера
2. Назови: `Heading/H1`, `Heading/H2`, `Body/Large`, `Body/Regular`
3. Установи шрифты через Google Fonts Plugin

### Шаг 3: Создай компоненты
1. Button → варианты: Primary, Secondary, Large, Small
2. Card → варианты: Default, Hover
3. Badge → варианты: Default, Secondary, Outline
4. Icon Wrapper → варианты по размерам

### Шаг 4: Настрой эффекты
1. Layer Effects → добавь Box Shadows
2. Назови: `Shadow/Small`, `Shadow/Medium`, `Shadow/Large`

### Шаг 5: Создай Auto Layout сетку
1. Desktop Frame: 1440px
2. Container: Auto Layout с padding 32px
3. Section: Auto Layout vertical с gap 64px
4. Cards Grid: Auto Layout с gap 24px

---

## 💡 Полезные плагины Figma

- **Google Fonts** — импорт Montserrat и Open Sans
- **Iconify** — импорт Lucide Icons
- **Auto Layout** — быстрая настройка отступов
- **Color Styles Manager** — массовое управление цветами
- **Content Reel** — генерация тестового контента

---

## 📊 Структура страницы

### Секция Hero
- Height: 800px (desktop)
- Background: Gradient от slate-50 через blue-50 до purple-50
- Content: центрировано, max-width 1024px
- Logo: 48×48px, синий квадрат с белым текстом "ТПУ"

### Секция About (Преимущества)
- Background: White
- Grid: 4 колонки (desktop), 2 (tablet), 1 (mobile)
- Card Height: auto
- Icon Box: 64×64px с градиентом

### Секция Catalog (Категории)
- Background: Gradient blue-50 to purple-50
- Grid: 3 колонки (desktop), 2 (tablet), 1 (mobile)
- Card: кликабельная с анимацией масштаба

### Секция Popular Courses
- Background: White
- Grid: 3 колонки (desktop), 2 (tablet), 1 (mobile)
- Course Image: 384×192px с градиентом-плейсхолдером

### Секция Learning Steps
- Background: Gradient purple-50 to blue-50
- Grid: 4 колонки (desktop), 2 (tablet), 1 (mobile)
- Step Cards: с большими номерами (01, 02, 03, 04)

### Секция CTA
- Background: Gradient от Primary через Secondary до Accent
- Text: White
- Height: 400px
- Buttons: центрированы

### Footer
- Background: Gray-900 (#111827)
- Text: Gray-300
- Grid: 4 колонки
- Height: auto (minimum 500px)

---

## 🚀 Экспорт из Figma

Рекомендации для разработки:
- Экспорт иконок: SVG, 24×24px
- Экспорт изображений: PNG 2x, WebP для продакшена
- Экспорт логотипов: SVG для масштабируемости
- Скриншоты макетов: PNG, 1440px width

---

**Создано для проекта:** Платформа онлайн-курсов ТПУ  
**Дата:** 2024  
**Технологии:** React + TypeScript + Tailwind CSS  
**Дизайн-система:** Основана на shadcn/ui
