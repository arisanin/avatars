const React = require('react');
const { renderToString } = require('react-dom/server');
const Avatar = require('boring-avatars').default;

const DEFAULT_COLORS = ["#3A0CA3", "#F72585", "#FFBA08", "#4CC9F0", "#9D4EDD"].join(',');
const DEFAULT_SIZE = 80;

function normalizeColors(colors) {
    const colorPalette = colors.split(',');

    if (colorPalette.length) {
        return colorPalette.map((color) => color.startsWith('#') ? color : `#${color}`);
    }
}

const app = require('express')();

app.get('/favicon.ico', (req, res) => { 
    res.sendStatus(204);
});

app.get('/', (req, res) => { 
    res.status(200).json({
        message: "Server is up and running!"
    });
});

app.get('/:size/:name', (req, res) => {
    const { size = DEFAULT_SIZE } = req.params
    const name = req.query.name || req.params.name || Math.random().toString();
    const colors = normalizeColors(req.query.colors || DEFAULT_COLORS);
    const square = req.query.hasOwnProperty('square');

    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');

    const svg = renderToString(
        React.createElement(Avatar, {
            size,
            name,
            variant: 'beam', // Use beam variant only. Visit https://boringavatars.com/ for more variants.
            colors,
            square,
        }, null)
    );

    res.end(svg);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on ${port}, http://localhost:${port}`);
});
