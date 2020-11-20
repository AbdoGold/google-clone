import React from 'react';
import './SearchPage.css';
import { useStateValue } from './StateProvider';
import useGoogleSearch from './useGoogleSearch';
import { Link } from 'react-router-dom';
import Search from './Search';
import SearchIcon from '@material-ui/icons/Search';
import ImageIcon from '@material-ui/icons/Image';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import BookIcon from '@material-ui/icons/Book';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function SearchPage() {
    const [{ term }, dispatch] = useStateValue();
    const { data }= useGoogleSearch(term);
    

    console.log(data)
    return (
        <div className="searchPage">
            <div className="searchPage_header">
                <Link to='/'>
                    <img className="searchPage_logo" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt=""/>
                </Link>

                <div className="searchPage_headerBody">
                    <Search hideButtons/>
                

                    <div className="searchPage_options">
                        <div className="searchPage_optionsLeft">
                            <div className="searchPage_option">
                                <SearchIcon/>
                                <Link to="/all">All</Link>
                            </div>

                            <div className="searchPage_option">    
                                <ImageIcon/>
                                <Link to="/images">Images</Link>
                            </div>

                            <div className="searchPage_option">
                                <VideoLibraryIcon/>
                                <Link to="/videos">Videos</Link>
                            </div>
                                
                            
                            <div className="searchPage_option">
                                <BookIcon/>
                                <Link to="/news">News</Link>
                            </div>

                            <div className="searchPage_option">
                                <MoreVertIcon/>
                                <Link to="/more">More</Link>
                            </div> 
                        </div>

                        <div className="searchPage_optionsRight">
                            <div className="searchPage_option">
                                <Link to="/settings">Settings</Link>
                            </div> 

                            <div className="searchPage_option">
                                <Link to="/tools">Tools</Link>
                            </div> 
                        </div>

                    </div>

                </div>

            </div>
            {term && (
                <div className="searchPage_results">
                    <p className="searchPage_resultCount">
                        About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}
                    </p>

                    {data?.items.map(item => (
                        <div className="searchPage_result">
                           <a href={item.link}>
                               {item.pagemap?.cse_image?.length > 0 &&  item.pagemap?.cse_image[0]?.src && (
                                   <img className="searchPage_resultImage" src={item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src} alt=""/>
                               )}
                               {item.displayLink}
                            </a> 
                           <a className="searchPage_resultTitle" href={item.link}>
                               <h2>{item.title}</h2>
                           </a>
                           <p className="searchPage_resultSnippet">{item.snippet}</p>
                        </div>
                    ))}
                </div>
            )}
            
            
        </div>
    )
}

export default SearchPage;
