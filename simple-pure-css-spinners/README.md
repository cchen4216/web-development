CSS Spinner 在很多情况是一个很好的小应用，可以让用户更加耐心等待加载。它的实现也很简单。

这里有三种 spinner，它们的基本上设置都在 main.css 文件中，而 spinner 的行为控制都放在 spinner-control.js。这里的实现比较简单，在加载正文内容之前 spinner 旋转 4 sec，然后消失，加载完成正文。