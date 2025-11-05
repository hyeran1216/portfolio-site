export type CategoryType = 'All'  | 'Personal Project'

export const CATEGORY_LIST: CategoryType[] = ['All', 'Personal Project']

export const ALL_CATEGORY = 'All';

export type ProjectType = {
    slug: string;
    title: string;
    date: string;
    summary: string;
    thumbnail: string;
    tags: string[];
    category: CategoryType;
}

export const PROJECTS: ProjectType[] = [
    {
        slug: 'palmful',
        title: 'Palmful',
        date: 'Fall 2025',
        summary: '사용자가 선택한 옵션에 따라 어울리는 꽃 조합과 디자인을 AI가 자동으로 생성하고, 디자인된 꽃다발은 아카이브에 저장할 수 있으며, 친구와 꽃다발을 공유할 수 있는 웹 서비스',
        thumbnail: '/projects/palmful/palmful-thumbnail-1.png',
        tags: ["React", "TypeScript", "Tailwind CSS", "AWS", "Figma"],
        category: 'Personal Project'
    },
    {
        slug: 'teachtouch',
        title: 'TeachTouch',
        date: 'Fall 2025',
        summary: '디지털 약자를 위한 학습 서비스',
        thumbnail: '/projects/teachtouch/tt-thumbnail-1.png',
        tags: ["React", "TypeScript", "AWS", "Figma"],
        category: 'Personal Project'
    },
    {
        slug: 'ezstress',
        title: 'EzStress',
        date: 'Spring 2025',
        summary: 'AI를 활용해 시스템 성능 병목 지점을 예측하고, 스트레스 테스트를 수행하며, 그 결과를 시각화하는 웹 서비스',
        thumbnail: '/projects/ezstress/ezstress-thumbnail-2.jpg',
        tags: ["React", "TypeScript", "AWS", "Figma"],
        category: 'Personal Project'
    },
    {
        slug: 'image2template',
        title: 'Image2Template',
        date: 'Spring 2025',
        summary: '포스터나 카드뉴스와 같은 디자인 이미지를 템플릿 형태로 변환하는 웹 기반 편집 도구',
        thumbnail: '/projects/capstone/image2template-thumbnail.png',
        tags: ["Jupyter Notebook", "Python", "napari", "SAM", "LAMA"],
        category: 'Personal Project'
    },
    {
        slug: 'simter',
        title: 'Simter',
        date: 'Fall 2024',
        summary: '고민을 부담없이 털어놓고 케어받을 수 있는 웹 서비스',
        thumbnail: '/projects/simter/simter-thumbnail-1.png',
        tags: ["React", "JavaScript", "Styled Components", "Netlify", "Figma", "Redux"],
        category: 'Personal Project'
    },
    
]