class jsStudio
{
	constructor(options)
	{
		this.setColors(options?.colors);
		this.setTexts(options?.texts);
		this.setComponents(options?.components);
	}
	
	setColors(colors)
	{
		this.colors = this.colors || new Object();
		Object.assign(this.colors, colors);
	}
	
	setTexts(texts)
	{
		this.texts = this.texts || new Object();
		this.texts.title = texts?.title || this.texts.title;
		this.texts.subtitle = texts?.subtitle || this.texts.subtitle;
		this.texts.content = texts?.content || this.texts.content;
	}
	
	setComponents(components)
	{
		this.components = this.components || new Object();
		Object.assign(this.components, components);
	}
};

export default jsStudio;
