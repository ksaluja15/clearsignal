---
title: "Polynomial fitting using Pytorch"
date: "2023-08-01"
excerpt: "Here is a short tutorial on how to fit polynomials using pytorch."
imageUrl: ""
tags: ["blog"]
---

Here is a short tutorial on how to fit polynomials using pytorch.

          NOTE: This was written a few years ago. I found this notebook burried in
          my SSD yesterday and thought I should share it.

### 
          Fitting Polynomials

        Creating a polynomial module of second order a+bx+cx^2=0

        Generate Parabolic data

        Training loop

        Optimizer variables

```python import torch
device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')

class Polynomial_2(torch.nn.Module):
    def __init__(self) -> None:
        super().__init__()
        self.a = torch.nn.Parameter(torch.randn(()))
        self.b = torch.nn.Parameter(torch.randn(()))
        self.c = torch.nn.Parameter(torch.randn(()))

    def forward(self, x):
        return self.a + self.b * x + self.c * torch.pow(x, 2)

import numpy as np

def generate_parabolic_data(N, a, b, c):
    """Genrates parabolic data around a curve a+bx+cx^2=0"""
    x = np.linspace(-10, 10, N)
    y = a + b * x + c * x**2
    return x.astype(np.float32), y.astype(np.float32)

X, Y = generate_parabolic_data(10, 1, 2, 3)

num_rows = 1000
lr = 1.e-1
num_epochs = 25
batch_size = 16
num_batches = num_rows // batch_size

X, Y = generate_parabolic_data(num_rows, 1, 2, 3)
X = torch.from_numpy(X).to(device)
Y = torch.from_numpy(Y).to(device)

polynomial_model = Polynomial_2()
polynomial_model.to(device)

optim = torch.optim.Adam(polynomial_model.parameters(), lr=lr)

for epoch in range(num_epochs):
    for batch_idx in range(num_batches):
        optim.zero_grad()
        y_hat = polynomial_model.forward(X[batch_idx * batch_size:(batch_idx + 1) * batch_size])
        loss = torch.nn.functional.mse_loss(y_hat, Y[batch_idx * batch_size:(batch_idx + 1) * batch_size], reduction='sum')
        loss.backward()
        optim.step()
    if (epoch % 5 == 0 or epoch == num_epochs - 1):
        print(f'epoch: {epoch} | loss: {loss.item():0.3f}')

print(f"\\nInput Data equation is generated for the equation: 1 + 2x + 3x^2")
print(f"Equation after optimizing is: {polynomial_model.a.item():.4f} + {polynomial_model.b.item():.4f}x + {polynomial_model.c.item():.4f}x^2")

epoch: 0 | loss: 3889.375
epoch: 5 | loss: 6.941
epoch: 10 | loss: 0.812
epoch: 15 | loss: 0.029
epoch: 20 | loss: 0.002
epoch: 24 | loss: 0.001

Input Data equation is generated for the equation: 1 + 2x + 3x^2
Equation after optimizing is: 1.0061 + 1.9993x + 3.0000x^2

for param_tensor in optim.state_dict():
    print(f"\t {param_tensor}: {optim.state_dict()[param_tensor]}")

	 state: {0: {'step': tensor(1550.), 'exp_avg': tensor(0.0296, device='cuda:0'), 'exp_avg_sq': tensor(28273.8398, device='cuda:0')}, 1: {'step': tensor(1550.), 'exp_avg': tensor(0.6155, device='cuda:0'), 'exp_avg_sq': tensor(1985039.1250, device='cuda:0')}, 2: {'step': tensor(1550.), 'exp_avg': tensor(8.0943, device='cuda:0'), 'exp_avg_sq': tensor(1.5650e+08, device='cuda:0')}}
	 param_groups: [{'lr': 0.1, 'betas': (0.9, 0.999), 'eps': 1e-08, 'weight_decay': 0, 'amsgrad': False, 'maximize': False, 'foreach': None, 'capturable': False, 'differentiable': False, 'fused': False, 'params': [0, 1, 2]}]

