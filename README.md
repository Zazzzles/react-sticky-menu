# React native sticky header

> Super simple component for making things stick to the top of the screen when scrolling past them. Especially useful for menus!

![Example](https://media.giphy.com/media/7JBtht5RFma891oFvw/giphy.gif)


## Code Samples

```
    import StickyMenu from './components/StickyMenu'
        
    class App extends Component {
    render() {
        return (
        <div className="App">
            <div className='cover'>
                <h1>This is a landing page</h1>
            </div>

            <StickyMenu>
                <div className='header'>
                    <h1>This is a sticky menu</h1>
                </div>
            </StickyMenu>
        

            <div className='about'> 
            <h1>This is a about section</h1>
            </div>

            <div className='contact'> 
            <h1>This is a contact section</h1>
            </div>

        </div>
        );
    }
    }
```

## Usage

> Use the `<StickyMenu>` component to wrap elements to stick to the top of the page when scrolled past.

## Starting the project

`npm run start`

or if you're using yarn

`yarn start`

## Pull Requests

1. Fork it and create your feature branch: git checkout -b my-new-feature
2. Commit your changes: git commit -am 'Add some feature'
3. Push to the branch: git push origin my-new-feature 
4. Submit a pull request
