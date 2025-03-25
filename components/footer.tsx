export default function Footer() {
  return (
    <footer className="py-8 bg-muted/50 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Sameer Alam. All rights reserved.
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">
              Built with Next.js, React, and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
