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

export type MovieData = {
	media_type: 'movie';
	id: number;
	title: string;
	overview: string;
	release_date: string;
	backdrop_path: string | null;
	poster_path: string | null;
	vote_average: number;
};

export type ActorData = {
	id: number;
	name: string;
	profile_path: string | null;
	know_for: MovieData[];
};
