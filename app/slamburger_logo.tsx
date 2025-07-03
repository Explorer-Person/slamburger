export default function SlamBurgerLogo() {
    return (
        <svg className="relative bottom-3" width="56" height="56" viewBox="0 0 42 42" fill="none">
            {/* Alt ekmek */}
            <ellipse
                cx="21"
                cy="32"
                rx="16"
                ry="7"
                fill="#FFCA7A"
                stroke="#173D62"
                strokeWidth="2"
            />
            {/* Et */}
            <ellipse
                cx="21"
                cy="27"
                rx="13"
                ry="4"
                fill="#7D3E12"
                stroke="#173D62"
                strokeWidth="2"
            />
            {/* Üst ekmek */}
            <ellipse
                cx="21"
                cy="19"
                rx="16"
                ry="9"
                fill="#FFD590"
                stroke="#173D62"
                strokeWidth="2"
            />
            {/* Susam */}
            <ellipse cx="15" cy="16" rx="1" ry="0.6" fill="#FFF4E8" />
            <ellipse cx="21" cy="14" rx="1" ry="0.6" fill="#FFF4E8" />
            <ellipse cx="27" cy="17" rx="1" ry="0.6" fill="#FFF4E8" />
            {/* Slam efekti: Yıldız */}
            <polygon
                points="21,7 23,13 29,13 24,16 26,22 21,18 16,22 18,16 13,13 19,13"
                fill="#FF8700"
                stroke="#173D62"
                strokeWidth="1"
            >
                <animateTransform
                    attributeName="transform"
                    type="scale"
                    values="1;1.15;1"
                    keyTimes="0;0.5;1"
                    dur="1.2s"
                    repeatCount="indefinite"
                />
            </polygon>
        </svg>
    );
}