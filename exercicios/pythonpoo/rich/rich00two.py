
from rich.panel import Panel
from rich.console import Console
from rich.text import Text

console = Console()

console.print(Panel.fit(Text("Hello, World!", justify="center")))