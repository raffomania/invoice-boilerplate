build file='details.yml':
	pandoc -f markdown -o output.pdf --template=template.tex --pdf-engine=xelatex '{{file}}'

watch:
	watchexec -e yml,tex 'just build'

clean:
	rm output.pdf
