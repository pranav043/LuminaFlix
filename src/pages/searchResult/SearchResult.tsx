import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

import "./style.scss";

import { tmdbApi } from "../../utils/tmdb";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import MovieCard from "../../components/movieCard/MovieCard";
import Spinner from "../../components/spinner/Spinner";
import noResults from "../../assets/no-results.png";

const SearchResult = () => {
    const [data, setData] = useState(null);
    const [pageNum, setPageNum] = useState(1);
    const [loading, setLoading] = useState(false);
    const { query } = useParams();

    const fetchInitialData = () => {
        setLoading(true);
        tmdbApi(`/search/multi?query=${query}&page=${pageNum}`, '').then(
            (res) => {
                setData(res);
                setPageNum((prev) => prev + 1);
                setLoading(false);
            }
        );
    };

    const fetchNextPageData = () => {
        tmdbApi(`/search/multi?query=${query}&page=${pageNum}`, '').then(
            (res) => {
                if ((data as any)?.results) {
                    setData({
                        ...(data as any),
                        results: [...(data as any)?.results, ...res.results],
                    });
                } else {
                    setData(res);
                }
                setPageNum((prev) => prev + 1);
            }
        );
    };

    useEffect(() => {
        setPageNum(1);
        fetchInitialData();
    }, [query]);

    return (
        <div className="searchResultsPage">
            {loading && <Spinner initial={true} />}
            {!loading && (
                <ContentWrapper>
                    {(data as any)?.results?.length > 0 ? (
                        <>
                            <div className="pageTitle">
                                {`Search ${(data as any)?.total_results > 1
                                    ? "results"
                                    : "result"
                                    } of '${query}'`}
                            </div>
                            <InfiniteScroll
                                className="content"
                                dataLength={(data as any)?.results?.length || []}
                                next={fetchNextPageData}
                                hasMore={pageNum <= (data as any)?.total_pages}
                                loader={<Spinner initial={''} />}
                            >
                                {(data as any)?.results.map((item, index) => {
                                    if ((item as any).media_type === "person") return;
                                    return (
                                        <MovieCard
                                            key={index}
                                            data={item}
                                            fromSearch={true}
                                            mediaType={''}
                                        />
                                    );
                                })}
                            </InfiniteScroll>
                        </>
                    ) : (
                        <span className="resultNotFound">
                            Sorry, Results not found!
                        </span>
                    )}
                </ContentWrapper>
            )}
        </div>
    );
};

export default SearchResult;
