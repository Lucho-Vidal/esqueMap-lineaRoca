const importAllImages = async (): Promise<string[]> => {
    const images = [];
    for (let i = 1; i <= 13; i++) {
        const image = await import(`../images/${i}.png`);
        images.push(image.default);
    }
    return images;
};

export default importAllImages;
