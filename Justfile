build:
	pandoc -f markdown -o output.pdf --template=template.tex --pdf-engine=xelatex details.yml

watch:
	watchexec -e yml,tex 'just build'

clean:
	rm output.pdf

send:
	deno run --allow-read=.env,.env.defaults,.env.example,output.pdf --allow-env --allow-net send_mail.ts
