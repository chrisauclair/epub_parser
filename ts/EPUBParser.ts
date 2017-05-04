import Publication from "./lib/Publication";

export default class EPUBParser {
	
	parse(file: string): Promise<Publication> {
		return Promise.resolve(new Publication);
	}

	build(obj: Publication, file: string): Promise<void> {
		return Promise.resolve();
	}
}