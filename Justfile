build:
	pandoc -f markdown -o output.pdf --template=template.tex --pdf-engine=xelatex details.yml

watch:
	watchexec -e yml,tex 'just build'

clean:
	rm output.pdf
