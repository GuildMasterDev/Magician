# Magician ✨

A comprehensive Electron application for aspiring magicians, providing essential resources and guidance for beginning your magical journey.

## Features

- **Magic Organizations** - Connect with prestigious magic societies worldwide including IBM, SAM, The Magic Circle, and the Academy of Magical Arts
- **Essential Books** - Curated collection of must-read magic books from beginner to advanced levels
- **Starter Kits** - Recommended magic sets and kits for different skill levels and budgets
- **Basic Tricks** - Learn fundamental sleights and routines that form the foundation of magic
- **Tips & Advice** - Professional guidance and best practices for developing your magical skills

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup
```bash
# Clone the repository
git clone https://github.com/guildmasterdev/Magician.git
cd Magician

# Install dependencies
npm install

# Start the application
npm start
```

### Development
```bash
# Run in development mode
npm run dev
```

## Technology Stack

- **Electron** - Cross-platform desktop application framework
- **Vanilla JavaScript** - Pure JavaScript for optimal performance
- **HTML5/CSS3** - Modern web standards with gradient backgrounds and glassmorphism effects
- **ImageMagick** - Asset generation for icons and favicons

## Project Structure

```
Magician/
├── assets/              # Application icons and images
├── main.js             # Main Electron process
├── preload.js          # Preload script for security
├── renderer.js         # Renderer process logic
├── index.html          # Main application window
├── styles.css          # Application styling
├── data.js            # Magic resources data
└── package.json       # Project configuration
```

## Features in Detail

### Organizations Section
Browse information about major magic organizations including membership costs, benefits, and how to join. Perfect for networking and finding your local magic community.

### Books Library
Discover essential reading materials categorized by difficulty level, from beginner classics like "The Royal Road to Card Magic" to advanced theory in "Strong Magic".

### Starter Kits
Find the perfect magic set to begin your journey, with detailed information about contents, age recommendations, and skill levels.

### Tricks Database
Learn fundamental magic techniques with time estimates and difficulty ratings, from basic sleights to classic routines.

### Tips for Success
Professional advice covering practice techniques, performance psychology, and the magician's code of ethics.

## Building for Distribution

```bash
# Package for macOS
npm run build-mac

# Package for Windows  
npm run build-win

# Package for Linux
npm run build-linux
```

## Contributing

Contributions are welcome! Please feel free to submit pull requests with:
- New magic resources
- UI/UX improvements
- Bug fixes
- Additional features

## License

MIT License - see LICENSE file for details

## Author

David - [guildmasterdev](https://github.com/guildmasterdev)

## Acknowledgments

- Magic community for continuous inspiration
- All the legendary magicians whose work is featured in the resources
- Electron team for the amazing framework

---

**Remember the Magician's Code**: Never reveal the secret behind a trick. Keep the magic alive! 🎩✨