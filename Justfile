build file='details.yml':
	bin/render-invoice "{{file}}"

watch:
	watchexec -e yml,tex 'just build'

clean:
	rm output.pdf
