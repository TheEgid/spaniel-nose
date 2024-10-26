
export const groupBy = <T, K extends string | number | symbol>(arr: T[], key: (i: T) => K): Record<K, T[]> =>
    arr.reduce<Record<K, T[]>>((groups, item) => {
        const groupKey = key(item);
        const groupArray = groups[groupKey] ||= [];

        groupArray.push(item);

        return groups;
    }, Object.create(null));

export const fullFormatDate = (inputDate: string): string => {
    const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

    const date = new Date(inputDate);
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    return `${day} ${month} ${year}, ${hours}:${minutes < 10 ? "0" : ""}${minutes}`;
};

export const dateFormat = (dateString: string): string => {
    const date = new Date(dateString);

    return date.toLocaleDateString() + " " + date.toLocaleTimeString().slice(0, 5);
};

export const cleanFileName = (fileName: string): string => {

    const cleanEdges = (input: string): string => {
        let mod = input;

        while (mod.startsWith("_") || mod.startsWith("-")) {
            mod = mod.slice(1);
        }
        while (mod.endsWith("_") || mod.endsWith("-")) {
            mod = mod.slice(0, -1);
        }
        return mod;
    };
    const clearSymbls = (input: string): string => {
        let mod = input.toLocaleLowerCase();

        mod = mod.replace(/[^a-zа-я0-9_\-.]/gi, "_"); // Replace all not allowed symbols
        mod = mod.replace(/-+/g, "_"); // Replace all double dashes
        mod = mod.replace(/_+/g, "_"); // Replace all double underscores
        return mod;
    };
    const transliterate = (text: string): string =>
        text
            .replace(/\u0401/g, "YO")
            .replace(/\u0419/g, "I")
            .replace(/\u0426/g, "TS")
            .replace(/\u0423/g, "U")
            .replace(/\u041A/g, "K")
            .replace(/\u0415/g, "E")
            .replace(/\u041D/g, "N")
            .replace(/\u0413/g, "G")
            .replace(/\u0428/g, "SH")
            .replace(/\u0429/g, "SCH")
            .replace(/\u0417/g, "Z")
            .replace(/\u0425/g, "H")
            .replace(/\u042A/g, "")
            .replace(/\u0451/g, "yo")
            .replace(/\u0439/g, "i")
            .replace(/\u0446/g, "ts")
            .replace(/\u0443/g, "u")
            .replace(/\u043A/g, "k")
            .replace(/\u0435/g, "e")
            .replace(/\u043D/g, "n")
            .replace(/\u0433/g, "g")
            .replace(/\u0448/g, "sh")
            .replace(/\u0449/g, "sch")
            .replace(/\u0437/g, "z")
            .replace(/\u0445/g, "h")
            .replace(/\u044A/g, "'")
            .replace(/\u0424/g, "F")
            .replace(/\u042B/g, "I")
            .replace(/\u0412/g, "V")
            .replace(/\u0410/g, "a")
            .replace(/\u041F/g, "P")
            .replace(/\u0420/g, "R")
            .replace(/\u041E/g, "O")
            .replace(/\u041B/g, "L")
            .replace(/\u0414/g, "D")
            .replace(/\u0416/g, "ZH")
            .replace(/\u042D/g, "E")
            .replace(/\u0444/g, "f")
            .replace(/\u044B/g, "i")
            .replace(/\u0432/g, "v")
            .replace(/\u0430/g, "a")
            .replace(/\u043F/g, "p")
            .replace(/\u0440/g, "r")
            .replace(/\u043E/g, "o")
            .replace(/\u043B/g, "l")
            .replace(/\u0434/g, "d")
            .replace(/\u0436/g, "zh")
            .replace(/\u044D/g, "e")
            .replace(/\u042F/g, "Ya")
            .replace(/\u0427/g, "CH")
            .replace(/\u0421/g, "S")
            .replace(/\u041C/g, "M")
            .replace(/\u0418/g, "I")
            .replace(/\u0422/g, "T")
            .replace(/\u042C/g, "'")
            .replace(/\u0411/g, "B")
            .replace(/\u042E/g, "YU")
            .replace(/\u044F/g, "ya")
            .replace(/\u0447/g, "ch")
            .replace(/\u0441/g, "s")
            .replace(/\u043C/g, "m")
            .replace(/\u0438/g, "i")
            .replace(/\u0442/g, "t")
            .replace(/\u044C/g, "'")
            .replace(/\u0431/g, "b")
            .replace(/\u044E/g, "yu");

    const cleanedInput = cleanEdges(clearSymbls(fileName));

    return transliterate(cleanedInput);
};

export const isEmailValid = (email: string): boolean => {
    const emailRegex: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    return emailRegex.test(email);
};

export const isBoolean = (value: any): value is boolean => typeof value === "boolean";

// export const validationImageSchematicSchema = object({
//     schematic: string().min(1).required("schematic is required!"),
// }).required();

// export const validationAlbumSchema = object({
//     albumName: string().min(4).required("albumName is required!"),
// }).required();

// const SUPPORTED_FORMATS = ["image/jpeg", "image/png", "image/jpg"];
// const FILE_SIZE = 5242880;

// export const validationImageSchema = object().shape({
//     imageFile: mixed()
//         .test("fileFormat", "Unsupported Format: Please use JPG/JPEG/PNG images only.", (value) => {
//             const image = value && ([value].at(0) as File[]);

//             if (image?.[0]) {
//                 return SUPPORTED_FORMATS.includes(image[0].type);
//             }
//         })
//         .test("fileSize", "File too large. Max. allowed file size is 5MB.", (value) => {
//             const image = [value].at(0) as File[];

//             if (image.length >= 1) {
//                 return image[0].size < FILE_SIZE;
//             }
//         })
//         .required("An image is required"),
// });

export const fixActiveNavs = (currentNavLink: string): void => {
    if (typeof document === "undefined") { return; }
    const current = document.querySelector(currentNavLink);

    if (!current) { return; }

    const badLinks = Array.from(document.querySelectorAll<HTMLLinkElement>("a.nav-link[href^=\"/\"].active")).filter(
        (e) => e.href !== (current as HTMLLinkElement).href,
    );

    if (badLinks.length) {
        badLinks.forEach((e) => {
            e.classList.remove("active");
        });
    }
    current.classList.add("active");
};

// export const groupImagesByAlbumName = (myImages: IImage[]): Record<string, IImage[]> => {
//     const groupedImages: Record<string, IImage[]> = {};

//     myImages?.forEach((image) => {
//         const albumName = image.album?.albumName;

//         if (albumName) {
//             groupedImages[albumName] = [...(groupedImages[albumName] || []), image];
//         }
//     });

//     return groupedImages;
// };

// export const filterAndSortImages = (groupedImages: Record<string, IImage[]>): IImage[] => {
//     const imagesOut = Object.values(groupedImages)
//         .map((albumImages) => albumImages.find((image) => image.schematic.startsWith("1")))
//         .filter(Boolean) as IImage[];

//     return imagesOut.sort((a, b) => b.album.albumName.localeCompare(a.album.albumName));
// };
