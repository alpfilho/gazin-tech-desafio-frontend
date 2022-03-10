export type Theme = 'dark' | 'light';
export type ThemeSwitch = () => void;

export type ApiConfiguration = {
	images: {
		base_url: string;
		secure_base_url: string;
		backdrop_sizes: string[];
		logo_sizes: string[];
		poster_sizes: string[];
		profile_sizes: string[];
		still_sizes: string[];
	};
};

export type MovieApiData = {
	id: number;
	title: string;
	overview: string;
	release_date: string;
	backdrop_path: string | null;
	poster_path: string | null;
	vote_average: number;
};

export type BannerMovieData = {
	id: number;
	title: string;
	overview: string;
	rating: number;
	backdrop: string;
};

export type MovieItemData = {
	id: number;
	title: string;
	poster: string;
	releaseDate: string | null;
};

export type MovieDetailApiData = {
	id: number;
	title: string;
	overview: string;
	poster_path: string;
	backdrop_path: string;
	vote_average: number;
};

export type MovieDetailData = {
	id: number;
	title: string;
	overview: string;
	poster: string;
	backdrop: string;
	rating: number;
};

export type ActorItemApiData = {
	id: number;
	name: string;
	profile_path: string | null;
	know_for: MovieApiData[];
	known_for_department: string;
};

export type ActorDetailApiData = {
	id: number;
	biography: string;
	name: string;
	birthday: string;
	place_of_birth: string;
	profile_path: string | null;
	movie_credits: {
		cast: MovieApiData[];
	};
};

export type ActorDetailData = {
	id: number;
	name: string;
	profile: string;
	birthday: string;
	biography: string;
	placeOfBirth: string;
	filmography: MovieItemData[];
};

export type ActorItemData = {
	id: number;
	name: string;
	profile: string;
	birthday: string;
};
