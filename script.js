  document.getElementById('insuranceForm').addEventListener('submit', function(e) {
      e.preventDefault(); // prevent actual form submission

      // Get form values
      const provider = document.getElementById('provider').value;
      const policy = document.getElementById('policy-number').value;
      const coverage = document.getElementById('coverage').value;
      const expiry = document.getElementById('expiry-date').value;
      const contact = document.getElementById('contact').value;
      const email = document.getElementById('email').value;

      // Fill submitted data section
      document.getElementById('out-provider').textContent = provider;
      document.getElementById('out-policy-number').textContent = policy;
      document.getElementById('out-coverage').textContent = coverage;
      document.getElementById('out-expiry-date').textContent = expiry;
      document.getElementById('out-contact').textContent = contact;
      document.getElementById('out-email').textContent = email;

      // Show the submitted data section
      document.getElementById('submittedData').style.display = 'block';

      // Optionally, clear form
      // e.target.reset();
    });