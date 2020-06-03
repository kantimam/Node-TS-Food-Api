import recipeScraper from 'recipe-scraper';

/* try to scrape recipe url and add it to the database */
export async function scrapeRecipeUrl(req, res) {
    try {
        const u = 'https://www.allrecipes.com/recipe/212721/indian-chicken-curry-murgh-kari/?internalSource=hub%20recipe&referringContentType=Search&clickId=cardslot%203';
        const recipe = await recipeScraper(u);
        res.send(`<pre>${JSON.stringify(recipe, null, 2)}</pre>`);
    } catch (e) {
        console.dir(e);
        res.status(500).send('failed to parse your recipe');
    }
}





export default {
    scrapeRecipeUrl
}