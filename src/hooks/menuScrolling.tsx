type Offsets = {
    [key: string]: number[];
};

const offsets:Offsets = {
//  '<Section>': [<offsets for different thresholds: 0-470, 471-570, ...>]
    'START': [0, 0, 0, 0, 0],
    'ABOUT': [440, 440, 720, 720, 720],
    'GALLERY': [1060, 930, 1300, 1100, 1100],
    'CONTACT': [1760, 1900, 2500, 1650, 1700],
    'ORDER': [3140, 3280, 4000, 4000, 4000],
}

export default function menuScrolling (e: any): void {
    let screenWidth = window.innerWidth; // Number
    let height;

    switch (true) {
        case screenWidth > 1220:
            height = offsets[e.target.dataset.height][4];
            window.scrollTo({ top: height, behavior: "smooth" });
            break;
        case screenWidth > 850:
            height = offsets[e.target.dataset.height][3];
            window.scrollTo({ top: height, behavior: "smooth" });
            break;
        case screenWidth > 570:
            height = offsets[e.target.dataset.height][2];
            window.scrollTo({ top: height, behavior: "smooth" });
            break;
        case screenWidth > 470:
            height = offsets[e.target.dataset.height][1];
            window.scrollTo({ top: height, behavior: "smooth" });
            break;
        default:
            height = offsets[e.target.dataset.height][0];
            window.scrollTo({ top: height, behavior: "smooth" });
    }
}